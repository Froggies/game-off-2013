var PopupView = (function() {

	'use strict';

	function Popup(controller) {
		this.controller = controller;
	}

	Popup.prototype.hidePopup = function() {
		this.controller.glassElement.style.display = 'none';
		this.controller.firstPopup.view.container.style.display = 'none';
		this.controller.helpPopup.view.container.style.display = 'none';
		this.controller.chooseUserPopup.view.container.style.display = 'none';
		this.controller.chooseBonusPopup.view.container.style.display = 'none';
	};

	Popup.prototype.displayFirstPopup = function() {
		this.hidePopup();
		this.controller.glassElement.style.display = 'block';
		this.controller.firstPopup.view.container.style.display = 'block';
	};

	Popup.prototype.displayHelpPopup = function() {
		this.hidePopup();
		this.controller.glassElement.style.display = 'block';
		this.controller.helpPopup.view.container.style.display = 'block';
	};

	Popup.prototype.displayChooseUserPopup = function() {
		this.hidePopup();
		this.controller.glassElement.style.display = 'block';
		this.controller.chooseUserPopup.view.container.style.display = 'block';
	};

	Popup.prototype.displayChooseBonusPopup = function() {
		this.hidePopup();
		this.controller.glassElement.style.display = 'block';
		this.controller.chooseBonusPopup.view.container.style.display = 'block';
	};

	return Popup;

})();