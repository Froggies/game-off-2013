var BonusController = (function() {

  'use strict';

  function Bonus(game) {
    this.view = new BonusView(this);
    this.game = game;
  }

  ObjectUtil.inherit(Bonus, AbstractController);

  Bonus.prototype.activateBacklogCardsImprovement = function() {
    var button = ViewUtil.buildButton('nb cards backlog ++', function() {
      this.game.nbCardsInBacklogMax = this.game.nbCardsInBacklogMax + 1;
      button.setAttribute('disabled', 'disabled');
      TimeoutUtil.timeout(function() {
        button.removeAttribute('disabled');
      }, 60 * 1000 * 1, this);
    }, this);
    this.view.container.appendChild(button);
  };

  Bonus.prototype.activateEmptyBacklog = function() {
    var button = ViewUtil.buildButton('Empty backlog', function() {
      this.game.backlog.removeAllCards();
      button.setAttribute('disabled', 'disabled');
      TimeoutUtil.timeout(function() {
        button.removeAttribute('disabled');
      }, 60 * 1000 * 5, this);
    }, this);
    this.view.container.appendChild(button);
  };

  Bonus.prototype.activateCardTimeMinus = function() {
    var button = ViewUtil.buildButton('Card time --', function() {
      _.each(this.game.columns, function(column) {
        _.each(column.rows, function(row) {
          if(row.card !== undefined) {
            row.card.time = row.card.time / 2;
          }
        });
      });
      button.setAttribute('disabled', 'disabled');
      TimeoutUtil.timeout(function() {
        button.removeAttribute('disabled');
      }, 60 * 1000 * 2, this);
    }, this);
    this.view.container.appendChild(button);
  };

  Bonus.prototype.activateNewDev = function() {
    var button = ViewUtil.buildButton('New dev', function() {
      _.find(this.game.columns, function(column) {
        if(column.isActive === false) {
          column.setCanBeActivate(true);
          column.activate();
          return true;
        }
        return false;
      });
      button.setAttribute('disabled', 'disabled');
      TimeoutUtil.timeout(function() {
        button.removeAttribute('disabled');
      }, 60 * 1000 * 1, this);
    }, this);
    this.view.container.appendChild(button);
  };

  Bonus.prototype.activateNewTask = function() {
    var button = ViewUtil.buildButton('New task', function() {
      _.find(this.game.columns, function(column) {
        if(column.isActive === true) {
          var find = _.find(column.rows, function(row) {
            if(row.isActive === false) {
              row.activate();
              return true;
            }
            return false;
          });
          return find !== undefined;
        }
        return false;
      });
      button.setAttribute('disabled', 'disabled');
      TimeoutUtil.timeout(function() {
        button.removeAttribute('disabled');
      }, 60 * 1000 * 2, this);
    }, this);
    this.view.container.appendChild(button);
  };

  Bonus.prototype.activateLifeImprovement = function() {
    var button = ViewUtil.buildButton('Life ++', function() {
      this.game.score.nbLife = this.game.score.nbLife + 1;
      this.game.score.view.updateScore();
      button.setAttribute('disabled', 'disabled');
      TimeoutUtil.timeout(function() {
        button.removeAttribute('disabled');
      }, 60 * 1000 * 1, this);
    }, this);
    this.view.container.appendChild(button);
  };

	return Bonus;

})();