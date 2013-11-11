var HelpPopupController = (function() {

	'use strict';

	function Popup(popupController) {
		this.view = new HelpPopupView(this);
		this.popupController = popupController;
	}

	ObjectUtil.inherit(Popup, AbstractController);

	Popup.prototype.onGoBack = function() {
		this.popupController.displayFirstPopup();
	};

	return Popup;

})();