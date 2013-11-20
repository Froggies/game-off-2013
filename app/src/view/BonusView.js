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

  
  /*DONE POUR LES DIV
  function initButton(container, button) {
    ViewUtil.inactiveButton(button);
    button.className = 'noActive';
    container.appendChild(button);
  }
  */
  function initBonus(container, bonus) {
    ViewUtil.addClassName(bonus, 'noActive');
    container.appendChild(bonus);
  }


  /*A REWORKER POUR LES DIV*/
  function inactiveButtonDuring(button, time) {
    ViewUtil.inactiveButton(button);
    TimeoutUtil.timeout(function() {
      ViewUtil.activeButton(button);
    }, time);
  }


	Bonus.prototype.addBacklogCardsImprovement = function() {
    this.bonusBacklogCardsImprovement = ViewUtil.buildContainer('backlogCardsImprovement');
    this.container.appendChild(this.bonusBacklogCardsImprovement);
    ClickUtil.listen(this.bonusBacklogCardsImprovement, function(){
      this.controller.game.nbCardsInBacklogMax = this.controller.game.nbCardsInBacklogMax + 1;
      inactiveButtonDuring(this.bonusBacklogCardsImprovement, 60 * 1000 * 1);
    }, this);
    initBonus(this.container, this.bonusBacklogCardsImprovement);
  };
  Bonus.prototype.activateBacklogCardsImprovement = function() {
    ViewUtil.removeClassName(this.bonusBacklogCardsImprovement, 'noActive');
    ViewUtil.addClassName(this.bonusBacklogCardsImprovement, 'active');
  };


  Bonus.prototype.addEmptyBacklog = function() {
    this.bonusEmptyBacklog = ViewUtil.buildContainer('emptyBacklog');
    this.container.appendChild(this.bonusEmptyBacklog);
    ClickUtil.listen(this.bonusEmptyBacklog, function(){
      this.controller.game.backlog.removeAllCards();
      inactiveButtonDuring(this.bonusEmptyBacklog, 60 * 1000 * 5);
    }, this);
    initBonus(this.container, this.bonusEmptyBacklog);
  };
  Bonus.prototype.activateEmptyBacklog = function() {
    ViewUtil.removeClassName(this.bonusEmptyBacklog, 'noActive');
    ViewUtil.addClassName(this.bonusEmptyBacklog, 'active');
  };


  Bonus.prototype.addCardTimeMinus = function() {
    this.bonusCardTimeMinus = ViewUtil.buildContainer('cardTimeMinus');
    this.container.appendChild(this.bonusCardTimeMinus);
    ClickUtil.listen(this.bonusCardTimeMinus, function(){
      _.each(this.controller.game.columns, function(column) {
        _.each(column.rows, function(row) {
          if(row.card !== undefined) {
            row.card.time = row.card.time / 2;
          }
        });
      });
      inactiveButtonDuring(this.bonusCardTimeMinus, 60 * 1000 * 2);
    }, this);
    initBonus(this.container, this.bonusCardTimeMinus);
  };
  Bonus.prototype.activateCardTimeMinus = function() {
    ViewUtil.removeClassName(this.bonusCardTimeMinus, 'noActive');
    ViewUtil.addClassName(this.bonusCardTimeMinus, 'active');
  };


  Bonus.prototype.addNewDev = function() {
    this.bonusNewDev = ViewUtil.buildContainer('newDev');
    this.container.appendChild(this.bonusNewDev);
    ClickUtil.listen(this.bonusNewDev, function(){
      _.find(this.controller.game.columns, function(column) {
        if(column.isActive === false) {
          column.setCanBeActivate(true);
          column.activate();
          return true;
        }
        return false;
      });
      inactiveButtonDuring(this.bonusNewDev, 60 * 1000 * 1);
    }, this);
    initBonus(this.container, this.bonusNewDev);
  };
  Bonus.prototype.activateNewDev = function() {
    ViewUtil.removeClassName(this.bonusNewDev, 'noActive');
    ViewUtil.addClassName(this.bonusNewDev, 'active');
  };


  Bonus.prototype.addNewTask = function() {
    this.bonusNewTask = ViewUtil.buildContainer('newTask');
    this.container.appendChild(this.bonusNewTask);
    ClickUtil.listen(this.bonusNewTask, function(){
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
      inactiveButtonDuring(this.bonusNewTask, 60 * 1000 * 2);
    }, this);
    initBonus(this.container, this.bonusNewTask);
  };
  Bonus.prototype.activateNewTask = function() {
    ViewUtil.removeClassName(this.bonusNewTask, 'noActive');
    ViewUtil.addClassName(this.bonusNewTask, 'active');
  };


  Bonus.prototype.addLifeImprovement = function() {
    this.bonusLifeImprovement = ViewUtil.buildContainer('lifeImprovement');
    this.container.appendChild(this.bonusLifeImprovement);
    ClickUtil.listen(this.bonusLifeImprovement, function(){
      this.controller.game.header.score.nbLife = this.controller.game.header.score.nbLife + 1;
      this.controller.game.header.score.view.updateScore();
      inactiveButtonDuring(this.bonusLifeImprovement, 60 * 1000 * 1);
    }, this);
    initBonus(this.container, this.bonusLifeImprovement);
  };
  Bonus.prototype.activateLifeImprovement = function() {
    ViewUtil.removeClassName(this.bonusLifeImprovement, 'noActive');
    ViewUtil.addClassName(this.bonusLifeImprovement, 'active');
  };


	return Bonus;

})();

