var BonusView = (function() {

	'use strict';

	function Bonus(controller) {
		Bonus.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('bonus');
		this.addBacklogCardsImprovement();
		this.addEmptyBacklog();
		this.addCardTimeMinus();
		this.addNewDev();
		this.addNewTask();
		this.addLifeImprovement();
	}

	ObjectUtil.inherit(Bonus, AbstractView);

	Bonus.prototype.addBacklogCardsImprovement = function() {
    this.buttonBacklogCardsImprovement = ViewUtil.buildButton('nb cards backlog ++', function() {
      this.controller.game.nbCardsInBacklogMax = this.controller.game.nbCardsInBacklogMax + 1;
      ViewUtil.inactiveButton(this.buttonBacklogCardsImprovement);
      TimeoutUtil.timeout(function() {
        ViewUtil.activeButton(this.buttonBacklogCardsImprovement);
      }, 60 * 1000 * 1, this);
    }, this);
    ViewUtil.inactiveButton(this.buttonBacklogCardsImprovement);
    this.buttonBacklogCardsImprovement.className = 'noActive';
    this.container.appendChild(this.buttonBacklogCardsImprovement);
  };

  Bonus.prototype.activeBacklogCardsImprovement = function() {
    this.buttonBacklogCardsImprovement.className = '';
    ViewUtil.activeButton(this.buttonBacklogCardsImprovement);
  };

  Bonus.prototype.addEmptyBacklog = function() {
    this.buttonEmptyBacklog = ViewUtil.buildButton('Empty backlog', function() {
      this.controller.game.backlog.removeAllCards();
      ViewUtil.inactiveButton(this.buttonEmptyBacklog);
      TimeoutUtil.timeout(function() {
        ViewUtil.activeButton(this.buttonEmptyBacklog);
      }, 60 * 1000 * 5, this);
    }, this);
    ViewUtil.inactiveButton(this.buttonEmptyBacklog);
    this.buttonEmptyBacklog.className = 'noActive';
    this.container.appendChild(this.buttonEmptyBacklog);
  };

  Bonus.prototype.activeEmptyBacklog = function() {
    this.buttonEmptyBacklog.className = '';
    ViewUtil.activeButton(this.buttonEmptyBacklog);
  };

  Bonus.prototype.addCardTimeMinus = function() {
    this.buttonCardTimeMinus = ViewUtil.buildButton('Card time --', function() {
      _.each(this.controller.game.columns, function(column) {
        _.each(column.rows, function(row) {
          if(row.card !== undefined) {
            row.card.time = row.card.time / 2;
          }
        });
      });
      ViewUtil.inactiveButton(this.buttonCardTimeMinus);
      TimeoutUtil.timeout(function() {
        ViewUtil.activeButton(this.buttonCardTimeMinus);
      }, 60 * 1000 * 2, this);
    }, this);
    ViewUtil.inactiveButton(this.buttonCardTimeMinus);
    this.buttonCardTimeMinus.className = 'noActive';
    this.container.appendChild(this.buttonCardTimeMinus);
  };

  Bonus.prototype.activeCardTimeMinus = function() {
    this.buttonCardTimeMinus.className = '';
    ViewUtil.activeButton(this.buttonCardTimeMinus);
  };

  Bonus.prototype.addNewDev = function() {
    this.buttonNewDev = ViewUtil.buildButton('New dev', function() {
      _.find(this.controller.game.columns, function(column) {
        if(column.isActive === false) {
          column.setCanBeActivate(true);
          column.activate();
          return true;
        }
        return false;
      });
      ViewUtil.inactiveButton(this.buttonNewDev);
      TimeoutUtil.timeout(function() {
        ViewUtil.activeButton(this.buttonNewDev);
      }, 60 * 1000 * 1, this);
    }, this);
    ViewUtil.inactiveButton(this.buttonNewDev);
    this.buttonNewDev.className = 'noActive';
    this.container.appendChild(this.buttonNewDev);
  };

  Bonus.prototype.activeNewDev = function() {
    this.buttonNewDev.className = '';
    ViewUtil.activeButton(this.buttonNewDev);
  };

  Bonus.prototype.addNewTask = function() {
    this.buttonNewTask = ViewUtil.buildButton('New task', function() {
      _.find(this.controller.game.columns, function(column) {
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
      ViewUtil.inactiveButton(this.buttonNewTask);
      TimeoutUtil.timeout(function() {
        ViewUtil.activeButton(this.buttonNewTask);
      }, 60 * 1000 * 2, this);
    }, this);
    ViewUtil.inactiveButton(this.buttonNewTask);
    this.buttonNewTask.className = 'noActive';
    this.container.appendChild(this.buttonNewTask);
  };

  Bonus.prototype.activeNewTask = function() {
    this.buttonNewTask.className = '';
    ViewUtil.activeButton(this.buttonNewTask);
  };

  Bonus.prototype.addLifeImprovement = function() {
    this.buttonLifeImprovement = ViewUtil.buildButton('Life ++', function() {
      this.controller.game.score.nbLife = this.controller.game.score.nbLife + 1;
      this.controller.game.score.view.updateScore();
      ViewUtil.inactiveButton(this.buttonLifeImprovement);
      TimeoutUtil.timeout(function() {
        ViewUtil.activeButton(this.buttonLifeImprovement);
      }, 60 * 1000 * 1, this);
    }, this);
    ViewUtil.inactiveButton(this.buttonLifeImprovement);
    this.buttonLifeImprovement.className = 'noActive';
    this.container.appendChild(this.buttonLifeImprovement);
  };

  Bonus.prototype.activeLifeImprovement = function() {
    this.buttonLifeImprovement.className = '';
    ViewUtil.activeButton(this.buttonLifeImprovement);
  };

	return Bonus;

})();

