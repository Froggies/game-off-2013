var ChooseBonusPopupController = (function() {

  'use strict';

  function Popup(popupController) {
    this.view = new ChooseBonusPopupView(this);
    this.popupController = popupController;
  }

  ObjectUtil.inherit(Popup, AbstractController);

  Popup.prototype.onChooseBacklogCardsImprovement = function() {
    this.popupController.game.bonus.activateBacklogCardsImprovement();
    this.onNoChoose();
  };

  Popup.prototype.onChooseEmptyBacklog = function() {
    this.popupController.game.bonus.activateEmptyBacklog();
    this.onNoChoose();
  };

  Popup.prototype.onChooseCardTimeMinus = function() {
    this.popupController.game.bonus.activateCardTimeMinus();
    this.onNoChoose();
  };

  Popup.prototype.onChooseNewDev = function() {
    this.popupController.game.bonus.activateNewDev();
    this.onNoChoose();
  };

  Popup.prototype.onChooseNewTask = function() {
    this.popupController.game.bonus.activateNewTask();
    this.onNoChoose();
  };

  Popup.prototype.onChooseLifeImprovement = function() {
    this.popupController.game.bonus.activateLifeImprovement();
    this.onNoChoose();
  };

  Popup.prototype.onNoChoose = function() {
    this.popupController.view.hidePopup();
    this.popupController.game.resume();
  };

	return Popup;

})();