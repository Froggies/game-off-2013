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
  
  var initBonus = function(container, bonusElement, callback, context, timeInactive) {
    ViewUtil.addClassName(bonusElement, 'noActive');
    container.appendChild(bonusElement);
    ClickUtil.listen(bonusElement, function() {
      if(ViewUtil.hasClassName(bonusElement, 'active') === true) {
        callback.call(context);
        inactiveBonusDuring(bonusElement, timeInactive);
      }
    }, this);
  };

  function inactiveBonusDuring(bonus, time) {
    ViewUtil.addClassName(bonus, 'waiting');
    ViewUtil.removeClassName(bonus, 'active');
    var gaugebonus = ViewUtil.buildContainer('gaugebonus');
    bonus.appendChild(gaugebonus);
    TimeoutUtil.timeout(function() {
      ViewUtil.removeClassName(bonus, 'waiting');
      ViewUtil.addClassName(bonus, 'active');
      bonus.removeChild(gaugebonus);
      AudioUtil.bonusReady();
    }, time);
    gaugebonus.style.animationDuration = time + 'ms';
    gaugebonus.style.WebkitAnimationDuration = time + 'ms';
    gaugebonus.style.MozAnimationDuration = time + 'ms';
  }

	Bonus.prototype.addBacklogCardsImprovement = function() {
    this.bonusBacklogCardsImprovement = ViewUtil.buildContainer('backlogCardsImprovement');
    this.imgBonusBacklogCardsImprovement = ViewUtil.buildContainer('imgbonus');
    this.bonusBacklogCardsImprovement.appendChild(this.imgBonusBacklogCardsImprovement);
    initBonus(
      this.container, 
      this.bonusBacklogCardsImprovement, 
      function() {
        this.controller.game.nbCardsInBacklogMax = this.controller.game.nbCardsInBacklogMax + 1;
      }, 
      this,
      60 * 1000 * 1
    );
  };
  Bonus.prototype.activateBacklogCardsImprovement = function() {
    ViewUtil.removeClassName(this.bonusBacklogCardsImprovement, 'noActive');
    ViewUtil.addClassName(this.bonusBacklogCardsImprovement, 'active');
  };


  Bonus.prototype.addEmptyBacklog = function() {
    this.bonusEmptyBacklog = ViewUtil.buildContainer('emptyBacklog');
    this.imgBonusEmptyBacklog = ViewUtil.buildContainer('imgbonus');
    this.bonusEmptyBacklog.appendChild(this.imgBonusEmptyBacklog);
    initBonus(
      this.container, 
      this.bonusEmptyBacklog,
      function() {
        this.controller.game.backlog.removeAllCards();
      }, 
      this,
      60 * 1000 * 5
    );
  };
  Bonus.prototype.activateEmptyBacklog = function() {
    ViewUtil.removeClassName(this.bonusEmptyBacklog, 'noActive');
    ViewUtil.addClassName(this.bonusEmptyBacklog, 'active');
  };


  Bonus.prototype.addCardTimeMinus = function() {
    this.bonusCardTimeMinus = ViewUtil.buildContainer('cardTimeMinus');
    this.imgBonusCardTimeMinus = ViewUtil.buildContainer('imgbonus');
    this.bonusCardTimeMinus.appendChild(this.imgBonusCardTimeMinus);
    initBonus(
      this.container, 
      this.bonusCardTimeMinus,
      function() {
        _.each(this.controller.game.columns, function(column) {
          _.each(column.rows, function(row) {
            if(row.card !== undefined) {
              row.card.time = row.card.time / 2;
            }
          });
        });
      }, 
      this,
      60 * 1000 * 2
    );
  };
  Bonus.prototype.activateCardTimeMinus = function() {
    ViewUtil.removeClassName(this.bonusCardTimeMinus, 'noActive');
    ViewUtil.addClassName(this.bonusCardTimeMinus, 'active');
  };


  Bonus.prototype.addNewDev = function() {
    this.bonusNewDev = ViewUtil.buildContainer('newDev');
    this.imgBonusNewDev = ViewUtil.buildContainer('imgbonus');
    this.bonusNewDev.appendChild(this.imgBonusNewDev);
    initBonus(
      this.container, 
      this.bonusNewDev,
      function() {
        _.find(this.controller.game.columns, function(column) {
          if(column.isActive === false) {
            column.setCanBeActivate(true);
            column.activate();
            return true;
          }
          return false;
        });
      }, 
      this,
      60 * 1000 * 1
    );
  };
  Bonus.prototype.activateNewDev = function() {
    ViewUtil.removeClassName(this.bonusNewDev, 'noActive');
    ViewUtil.addClassName(this.bonusNewDev, 'active');
  };


  Bonus.prototype.addNewTask = function() {
    this.bonusNewTask = ViewUtil.buildContainer('newTask');
    this.imgBonusNewTask = ViewUtil.buildContainer('imgbonus');
    this.bonusNewTask.appendChild(this.imgBonusNewTask);
    initBonus(
      this.container, 
      this.bonusNewTask,
      function() {
        _.find(this.controller.game.columns, function(column) {
          if(column.isActive === true && column.hasInactiveRow === true) {
            column.setCanBeActivate(true);
            column.activate();
            return true;
          }
          return false;
        });
      }, 
      this,
      60 * 1000 * 2
    );
  };
  Bonus.prototype.activateNewTask = function() {
    ViewUtil.removeClassName(this.bonusNewTask, 'noActive');
    ViewUtil.addClassName(this.bonusNewTask, 'active');
  };


  Bonus.prototype.addLifeImprovement = function() {
    this.bonusLifeImprovement = ViewUtil.buildContainer('lifeImprovement');
    this.imgBonusLifeImprovement = ViewUtil.buildContainer('imgbonus');
    this.bonusLifeImprovement.appendChild(this.imgBonusLifeImprovement);
    initBonus(
      this.container, 
      this.bonusLifeImprovement,
      function() {
        this.controller.game.header.score.nbLife = this.controller.game.header.score.nbLife + 1;
        this.controller.game.header.score.view.updateScore();
      },
      this,
      60 * 1000 * 1
    );
  };
  Bonus.prototype.activateLifeImprovement = function() {
    ViewUtil.removeClassName(this.bonusLifeImprovement, 'noActive');
    ViewUtil.addClassName(this.bonusLifeImprovement, 'active');
  };


	return Bonus;

})();

