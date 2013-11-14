var PopupView = (function() {

	'use strict';

	function Popup(controller) {
		this.controller = controller;
	}

	Popup.prototype.hidePopup = function() {
		this.controller.glassElement.style.display = 'none';
		this.controller.chooseBonusPopup.view.container.style.display = 'none';
		this.controller.pausePopup.view.container.style.display = 'none';
	};

	Popup.prototype.displayChooseBonusPopup = function() {
		this.hidePopup();
		this.controller.glassElement.style.display = 'block';
		this.controller.chooseBonusPopup.view.container.style.display = 'block';
	};

	Popup.prototype.displayPausePopup = function() {
		this.hidePopup();
		this.controller.glassElement.style.display = 'block';
		this.controller.pausePopup.view.container.style.display = 'block';
		this.controller.pausePopup.view.show();
	};

	return Popup;

})();