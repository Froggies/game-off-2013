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

  function initButton(container, button) {
    ViewUtil.inactiveButton(button);
    button.className = 'noActive';
    container.appendChild(button);
  }

  function inactiveButtonDuring(button, time) {
    ViewUtil.inactiveButton(button);
    TimeoutUtil.timeout(function() {
      ViewUtil.activeButton(button);
    }, time);
  }

	Bonus.prototype.addBacklogCardsImprovement = function() {
    this.buttonBacklogCardsImprovement = ViewUtil.buildButton('nb cards backlog ++', function() {
      this.controller.game.nbCardsInBacklogMax = this.controller.game.nbCardsInBacklogMax + 1;
      inactiveButtonDuring(this.buttonBacklogCardsImprovement, 60 * 1000 * 1);
    }, this);
    initButton(this.container, this.buttonBacklogCardsImprovement);
  };

  Bonus.prototype.activateBacklogCardsImprovement = function() {
    this.buttonBacklogCardsImprovement.className = '';
    ViewUtil.activeButton(this.buttonBacklogCardsImprovement);
  };

  Bonus.prototype.addEmptyBacklog = function() {
    this.buttonEmptyBacklog = ViewUtil.buildButton('Empty backlog', function() {
      this.controller.game.backlog.removeAllCards();
      inactiveButtonDuring(this.buttonEmptyBacklog, 60 * 1000 * 5);
    }, this);
    initButton(this.container, this.buttonEmptyBacklog);
  };

  Bonus.prototype.activateEmptyBacklog = function() {
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
      inactiveButtonDuring(this.buttonCardTimeMinus, 60 * 1000 * 2);
    }, this);
    initButton(this.container, this.buttonCardTimeMinus);
  };

  Bonus.prototype.activateCardTimeMinus = function() {
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
      inactiveButtonDuring(this.buttonNewDev, 60 * 1000 * 1);
    }, this);
    initButton(this.container, this.buttonNewDev);
  };

  Bonus.prototype.activateNewDev = function() {
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
      inactiveButtonDuring(this.buttonNewTask, 60 * 1000 * 2);
    }, this);
    initButton(this.container, this.buttonNewTask);
  };

  Bonus.prototype.activateNewTask = function() {
    this.buttonNewTask.className = '';
    ViewUtil.activeButton(this.buttonNewTask);
  };

  Bonus.prototype.addLifeImprovement = function() {
    this.buttonLifeImprovement = ViewUtil.buildButton('Life ++', function() {
      this.controller.game.header.score.nbLife = this.controller.game.header.score.nbLife + 1;
      this.controller.game.header.score.view.updateScore();
      inactiveButtonDuring(this.buttonLifeImprovement, 60 * 1000 * 1);
    }, this);
    initButton(this.container, this.buttonLifeImprovement);
  };

  Bonus.prototype.activateLifeImprovement = function() {
    this.buttonLifeImprovement.className = '';
    ViewUtil.activeButton(this.buttonLifeImprovement);
  };

	return Bonus;

})();

