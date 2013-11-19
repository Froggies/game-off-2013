var GameController = (function() {

  'use strict';

  function Game(team) {
    this.team = team;
    this.timeout = undefined;
    this.columns = [];
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
    this.resume();
  };

  Game.prototype.pause = function() {
    window.clearInterval(this.timeout);
    this.timeout = undefined;
    this.backlog.pause();
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
      this.backlog.resume();
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
      if(this.header.score.level % Constants.NB_LVL_BONUS === 0) {
        this.pause();
        this.popupController.displayChooseBonusPopup();
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
      return 'finish';
    }
  };

  Game.prototype.columnIsActivated = function() {
    _.each(this.columns, function(column) {
      column.setCanBeActivate(false);
    });
  };

  return Game;

})();

