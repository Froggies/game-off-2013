var BonusController = (function() {

  'use strict';

  function Bonus(game) {
    this.view = new BonusView(this);
    this.game = game;
  }

  ObjectUtil.inherit(Bonus, AbstractController);

  Bonus.prototype.activateBacklogCardsImprovement = function() {
    this.view.activateBacklogCardsImprovement();
  };

  Bonus.prototype.activateEmptyBacklog = function() {
    this.view.activateEmptyBacklog();
  };

  Bonus.prototype.activateCardTimeMinus = function() {
    this.view.activateCardTimeMinus();
  };

  Bonus.prototype.activateNewDev = function() {
    this.view.activateNewDev();
  };

  Bonus.prototype.activateNewTask = function() {
    this.view.activateNewTask();
  };

  Bonus.prototype.activateLifeImprovement = function() {
    this.view.activateLifeImprovement();
  };

	return Bonus;

})();