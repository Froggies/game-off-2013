var BonusController = (function() {

  'use strict';

  function Bonus(game) {
    this.view = new BonusView(this);
    this.game = game;
    this.nbBonusActivate = 0;
  }

  ObjectUtil.inherit(Bonus, AbstractController);

  Bonus.prototype.hasInactiveBonus = function() {
    return this.nbBonusActivate < Constants.NB_BONUS;
  };

  Bonus.prototype.activateBacklogCardsImprovement = function() {
    this.nbBonusActivate = this.nbBonusActivate + 1;
    this.view.activateBacklogCardsImprovement();
  };

  Bonus.prototype.activateEmptyBacklog = function() {
    this.nbBonusActivate = this.nbBonusActivate + 1;
    this.view.activateEmptyBacklog();
  };

  Bonus.prototype.activateCardTimeMinus = function() {
    this.nbBonusActivate = this.nbBonusActivate + 1;
    this.view.activateCardTimeMinus();
  };

  Bonus.prototype.activateNewDev = function() {
    this.nbBonusActivate = this.nbBonusActivate + 1;
    this.view.activateNewDev();
  };

  Bonus.prototype.activateNewTask = function() {
    this.nbBonusActivate = this.nbBonusActivate + 1;
    this.view.activateNewTask();
  };

  Bonus.prototype.activateLifeImprovement = function() {
    this.nbBonusActivate = this.nbBonusActivate + 1;
    this.view.activateLifeImprovement();
  };

	return Bonus;

})();