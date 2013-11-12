var BonusController = (function() {

  'use strict';

  function Bonus(game) {
    this.view = new BonusView(this);
    this.game = game;
  }

  ObjectUtil.inherit(Bonus, AbstractController);

  Bonus.prototype.activateBacklogCardsImprovement = function() {
    this.view.container.appendChild(
      ViewUtil.buildButton('nb cards backlog ++', function() {
        this.game.nbCardsInBacklogMax = this.game.nbCardsInBacklogMax + 10;
      }, this)
    );
  };

  Bonus.prototype.activateEmptyBacklog = function() {
    this.view.container.appendChild(
      ViewUtil.buildButton('Empty backlog', function() {
        this.game.backlog.removeAllCards();
      }, this)
    );
  };

  Bonus.prototype.activateCardTimeMinus = function() {
    this.view.container.appendChild(
      ViewUtil.buildButton('Card time --', function() {
        _.each(this.game.columns, function(column) {
          _.each(column.rows, function(row) {
            if(row.card !== undefined) {
              row.card.time = row.card.time / 2;
            }
          });
        });
      }, this)
    );
  };

  Bonus.prototype.activateNewDev = function() {
    this.view.container.appendChild(
      ViewUtil.buildButton('New dev', function() {
        _.find(this.game.columns, function(column) {
          if(column.isActive === false) {
            column.setCanBeActivate(true);
            column.activate();
            return true;
          }
          return false;
        });
      }, this)
    );
  };

  Bonus.prototype.activateNewTask = function() {
    this.view.container.appendChild(
      ViewUtil.buildButton('New task', function() {
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
      }, this)
    );
  };

  Bonus.prototype.activateLifeImprovement = function() {
    this.view.container.appendChild(
      ViewUtil.buildButton('Life ++', function() {
        this.game.score.nbLife = this.game.score.nbLife + 1;
        this.game.score.view.updateScore();
      }, this)
    );
  };

	return Bonus;

})();