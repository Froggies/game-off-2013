var BonusController = (function() {

  'use strict';

  function Bonus(game) {
    this.view = new BonusView(this);
    this.game = game;
  }

  ObjectUtil.inherit(Bonus, AbstractController);

  Bonus.prototype.activateBacklogCardsImprovement = function() {
    this.view.activeBacklogCardsImprovement();
  };

  Bonus.prototype.activateEmptyBacklog = function() {
    ViewUtil.activeButton(this.view.buttonEmptyBacklog);
  };

  Bonus.prototype.activateCardTimeMinus = function() {
    ViewUtil.activeButton(this.buttonCardTimeMinus);
  };

  Bonus.prototype.activateNewDev = function() {
    ViewUtil.activeButton(this.buttonNewDev);
  };

  Bonus.prototype.activateNewTask = function() {
    ViewUtil.activeButton(this.buttonNewTask);
  };

  Bonus.prototype.activateLifeImprovement = function() {
    ViewUtil.activeButton(this.buttonLifeImprovement);
  };

	return Bonus;

})();