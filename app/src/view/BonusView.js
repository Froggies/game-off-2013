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
  
  var initBonus = function initBonus(container, bonusElement, callback, context, timeInactive) {
    ViewUtil.addClassName(bonusElement, 'noActive');
    bonusElement.appendChild(ViewUtil.buildContainer('imgbonus'));
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
    this.bonusBacklogCardsImprovement.title = LangUtil.get('chooseBonusPopupBacklogCardsPP');
  };


  Bonus.prototype.addEmptyBacklog = function() {
    this.bonusEmptyBacklog = ViewUtil.buildContainer('emptyBacklog');
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
    this.bonusEmptyBacklog.title = LangUtil.get('chooseBonusPopupEmptyBacklog');
  };


  Bonus.prototype.addCardTimeMinus = function() {
    this.bonusCardTimeMinus = ViewUtil.buildContainer('cardTimeMinus');
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
    this.bonusCardTimeMinus.title = LangUtil.get('chooseBonusPopupCardTimeMM');
  };


  Bonus.prototype.addNewDev = function() {
    this.bonusNewDev = ViewUtil.buildContainer('newDev');
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
    this.bonusNewDev.title = LangUtil.get('chooseBonusPopupNewDev');
  };


  Bonus.prototype.addNewTask = function() {
    this.bonusNewTask = ViewUtil.buildContainer('newTask');
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
    this.bonusNewTask.title = LangUtil.get('chooseBonusPopupNewTask');
  };


  Bonus.prototype.addLifeImprovement = function() {
    this.bonusLifeImprovement = ViewUtil.buildContainer('lifeImprovement');
    initBonus(
      this.container, 
      this.bonusLifeImprovement,
      function() {
        if(this.controller.game.header.score.nbLife < Constants.NB_LIFE) {
          this.controller.game.header.score.nbLife = this.controller.game.header.score.nbLife + 1;
          this.controller.game.header.score.view.updateLife();
        }
      },
      this,
      60 * 1000 * 1
    );
  };
  Bonus.prototype.activateLifeImprovement = function() {
    ViewUtil.removeClassName(this.bonusLifeImprovement, 'noActive');
    ViewUtil.addClassName(this.bonusLifeImprovement, 'active');
    this.bonusLifeImprovement.title = LangUtil.get('chooseBonusPopupLifePP');
  };


	return Bonus;

})();

