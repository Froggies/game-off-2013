var PausePopupController = (function() {

  'use strict';

  function Popup(controllerPopup) {
    this.controllerPopup = controllerPopup;
    this.view = new PausePopupView(this);
  }

  ObjectUtil.inherit(Popup, AbstractController);

  Popup.prototype.onClose = function() {
    this.controllerPopup.hide();
    this.controllerPopup.game.resume();
  };

	return Popup;

})();