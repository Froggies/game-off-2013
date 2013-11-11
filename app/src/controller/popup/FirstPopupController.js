var FirstPopupController = (function() {

	'use strict';

	function Popup(popupController) {
		this.view = new FirstPopupView(this);
		this.popupController = popupController;
	}

	ObjectUtil.inherit(Popup, AbstractController);

	Popup.prototype.onGoHelp = function() {
		this.popupController.displayHelpPopup();
	};

	Popup.prototype.onGoStart = function() {
		this.popupController.displayChooseUserPopup();
	};

	return Popup;

})();