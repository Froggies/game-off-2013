var GameController = (function() {

  'use strict';

  function Game(team, pageController) {
    this.team = team;
    this.pageController = pageController;
    this.timeout = undefined;
    this.columns = [];
    this.nbSprint = 0;
    this.nbCardsInBacklogMax = Constants.NB_CARDS_IN_BACKLOG_MAX;
    for(var i=0; i<Constants.NB_COLUMNS; i++) {
      this.columns.push(new ColumnController(this, i));
    }

    this.view = new GameView(this);
    this.backlog = new BacklogController(this);
    this.header = new HeaderController(this);
  }

  ObjectUtil.inherit(Game, AbstractController);

  Game.prototype.start = function(element) {
    this.view.draw(element);
    this.backlog.start(this.view.container);
    this.header.start(this.view.container);
    this.view.drawColumnsContainer();
    for(var indexColumn=0; indexColumn < this.columns.length; indexColumn++) {
      this.columns[indexColumn].start(this.view.getColumnsContainer());
    }
    this.startSprint();
  };

  Game.prototype.pause = function() {
    window.clearInterval(this.timeout);
    this.timeout = undefined;
    _.each(this.columns, function(column) {
      column.pause();
    });
  };

  Game.prototype.resume = function() {
    if(this.timeout === undefined) {
      this.timeout = TimeoutUtil.interval(function() {
        if(this.loop() === 'finish') {
          window.clearInterval(this.timeout);
        }
      }, GameUtil.calculTimeNewCard(this.header.score.score), this);
      _.each(this.columns, function(column) {
        column.resume();
      });
    }
  };

  Game.prototype.deleteCardInBacklog = function(card) {
    this.backlog.removeCard(card);
    if(this.search3cardsAdjacent() === true) {
      this.deleteCardInBacklog();
    }
  };

  Game.prototype.search3cardsAdjacent = function() {
    var prevColumn, nextColumn;
    for (var indexColumn = 0; indexColumn < this.columns.length; indexColumn++) {
      var column = this.columns[indexColumn];
      if(indexColumn < this.columns.length) {
        nextColumn = this.columns[indexColumn+1];
      }
      var points = column.search3cardsAdjacent(prevColumn, nextColumn); 
      if(points !== false) {
        this.incrementeScore(points);
        return true;
      }
      prevColumn = column;
    }
    return false;
  };

  Game.prototype.incrementeScore = function(score) {
    this.header.score.incrementeBy(score * Constants.SCORE_FACTOR);
    if(ScoreUtil.isNextLevel(this.header.score.score, this.header.score.level) === true) {
      this.pause();//TODO rework update time card backlog
      this.resume();//TODO rework update time card backlog
      this.header.score.updateLevel();
      AudioUtil.levelUp();
      if(this.header.score.level >= Constants.NB_LVL_END) {
        this.pause();
        this.pageController.showEndPage();
      } else if(this.header.score.level % Constants.NB_LVL_BONUS === 0) {
        if(this.header.bonus.hasInactiveBonus() === true) {
          this.pause();
          this.popupController.displayChooseBonusPopup();
        }
        this.backlog.removeAllCards();
        _.each(this.columns, function(column) {
          column.removeAllCards();
        });
      } else {
        _.each(this.columns, function(column) {
          column.setCanBeActivate(true);
        });
      }
    }
  };

  Game.prototype.loop = function() {
    this.backlog.addCard(CardUtil.buildCard(this.header.score.level));
    if(this.backlog.cards.length > this.nbCardsInBacklogMax) {
      this.header.score.loose();
      AudioUtil.loose();
      return 'finish';
    }
  };

  Game.prototype.columnIsActivated = function() {
    _.each(this.columns, function(column) {
      column.setCanBeActivate(false);
    });
  };

  Game.prototype.startSprint = function() {
    this.nbSprint = this.nbSprint + 1;
    this.view.showNewSprint();
    AudioUtil.sprint();
  };

  return Game;

})();

