var ChooseUserPopupController = (function() {

	'use strict';

	function Popup(popupController) {
		this.view = new ChooseUserPopupView(this);
		this.popupController = popupController;
	}

	ObjectUtil.inherit(Popup, AbstractController);

	Popup.prototype.onGoDev1 = function() {
		this.popupController.startGame();
	};

	Popup.prototype.onGoGithub = function() {
		this.popupController.startGame();
	};

	Popup.prototype.onGoBack = function() {
		this.popupController.displayFirstPopup();
	};

	return Popup;

})();