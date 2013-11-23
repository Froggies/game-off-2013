var ColumnController = (function() {

  'use strict';

  function Column(game, index) {
    this.game = game;
    this.view = new ColumnView(this);
    this.isActive = false;
    this.canBeActivate = false;
    this.hasCard = false;
    this.header = new HeaderColumnController(this, index);
    this.cardTimeout = undefined;
    this.isPause = false;
    this.hasInactiveRow = true;
    this.nbTaskRealised = 0;
    this.rows = [];
    for(var i=0; i<Constants.NB_ROWS; i++) {
      this.rows.push(new RowController());
    }
  }

  ObjectUtil.inherit(Column, AbstractController);

  Column.prototype.start = function(element) {
    this.view.draw(element);
    this.header.start(this.view.container);
    this.view.addDiv();
    _.each(this.rows, function(row) {
      row.start(this.view.container);
    }, this);
  };

  Column.prototype.setCanBeActivate = function(bool) {
    if(this.hasInactiveRow === true) {
      var nbRowInactive = 0;
      _.each(this.rows, function(row) {
        if(row.isActive === false) {
          nbRowInactive = nbRowInactive + 1;
        }
      });
      if(nbRowInactive > 0) {
        this.canBeActivate = bool;
        this.view.refreshClass();
        this.header.setCanBeActivate(bool);
      } else {
        this.hasInactiveRow = false;
      }
    }
  };

  //call by headerColumn when user click on it
  Column.prototype.activate = function() {
    if(this.canBeActivate === true) {
      this.isActive = true;
      this.canBeActivate = false;
      this.view.refreshClass();
      this.header.setCanBeActivate(false);
      this.view.activate();
      this.activeNextRow();
      this.game.columnIsActivated();
    } else {
      throw new Exception('You must setCanBeActivate(true) before call activate');
    }
  };

  Column.prototype.activeNextRow = function() {
    if(this.isActive === true) {
      var potentielRow = _.find(this.rows, function(row) {
        return row.isActive === false;
      });
      if(potentielRow !== undefined) {
        potentielRow.activate();
      }
    } else {
      throw new Exception('You must call activate before activeNextRow');
    }
  };

  Column.prototype.newCurrentCard = function() {
    if(this.rows[0].card !== undefined && this.isPause === false) {
      this.cardTimeout = TimeoutUtil.timeout(function() {
        window.clearInterval(this.cardTimeout);
        this.cardTimeout = undefined;
        var card = this.rows[0].card;
        if(card !== undefined) {
          card.time = card.time - 0.1;
          card.refreshView();
          if(card.time <= 0) {
            this.timeFinish();
          } else {
            this.newCurrentCard();
          }
        }
      }, 100, this);
    }
  };

  Column.prototype.addCard = function(card) {
    for(var i=0; i < this.rows.length && this.isPause === false; i++) {
      if(this.rows[i].canAcceptCard() === true) {
        this.rows[i].addCard(card);
        this.game.deleteCardInBacklog(card);
        if(i === 0) {
          this.newCurrentCard();
        }
        this.hasCard = true;
        this.view.refreshClass();
        return true;
      }
    }
    return false;
  };

  Column.prototype.timeFinish = function() {
    this.nbTaskRealised = this.nbTaskRealised + 1;
    this.game.incrementeScore(this.rows[0].card.complexity);
    this.game.search3cardsAdjacent();
    this.rows[0].removeCard();
    this.moveCardsByOnRow();
    this.hasCard = this.rows[0].card !== undefined;
    this.view.refreshClass();
    if(this.nbTaskRealised > Constants.NB_TASK_BEFORE_RESIGN && 
      _.random(0, Constants.NB_LUCK_RESIGN) === 0) {
      this.resign();
    }
  };

  Column.prototype.moveCardsByOnRow = function() {
    var previousRow;
    _.each(this.rows, function(row) {
      if(row.card !== undefined && previousRow !== undefined) {
        previousRow.addCard(row.card);
        row.removeCard();
        if(previousRow === this.rows[0]) {
          this.newCurrentCard();
        }
      }
      previousRow = row;
    }, this);
  };

  Column.prototype.pause = function() {
    this.isPause = true;
    window.clearInterval(this.cardTimeout);
    this.cardTimeout = undefined;
  };

  Column.prototype.resume = function() {
    this.isPause = false;
    if(this.cardTimeout === undefined && this.rows[0].card !== undefined) {
      this.newCurrentCard();
    }
  };

  Column.prototype.search3cardsAdjacent = function(prevColumn, nextColumn) {
    var prevRow, nextRow;
    for (var index = 0; index < this.rows.length; index++) {
      var row = this.rows[index];
      if(index < this.rows.length) {
        nextRow = this.rows[index+1];
      }
      //first search in ligne
      var points = row.search3cardsAdjacent(prevRow, nextRow);
      if(points !== false) {
        this.moveCardsByOnRow();
        this.moveCardsByOnRow();
        this.moveCardsByOnRow();
        return points;
      }
      //second search in column
      if(prevColumn !== undefined && nextColumn !== undefined) {
        var prevCard = prevColumn.rows[index].card;
        var card = this.rows[index].card;
        var nextCard = nextColumn.rows[index].card;
        if(prevCard !== undefined && card !== undefined && nextCard !== undefined) {
          if(prevCard.type === card.type && card.type === nextCard.type) {
            points = prevCard.complexity  + card.complexity + nextCard.complexity;
            prevColumn.rows[index].removeCard();
            prevColumn.moveCardsByOnRow();
            this.rows[index].removeCard();
            this.moveCardsByOnRow();
            nextColumn.rows[index].removeCard();
            nextColumn.moveCardsByOnRow();
            return points;
          }
        }
      }
      prevRow = row;
    }
    return false;
  };

  Column.prototype.removeAllCards = function() {
    _.each(this.rows, function(row) {
      row.removeCard();
    }, this);
    this.hasCard = false;
    this.view.refreshClass();
  };

  Column.prototype.resign = function() {
    this.isActive = false;
    this.canBeActivate = false;
    this.cardTimeout = undefined;
    this.isPause = false;
    this.hasInactiveRow = true;
    this.nbTaskRealised = 0;
    TimeoutUtil.timeout(this.view.inactivate, 2000, this.view);
    this.header.resign();
    _.each(this.rows, function(row) {
      row.inactivate();
    });
  };

  return Column;

})();

