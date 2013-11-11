var PopupController = (function() {

	'use strict';

	function Popup(game, glassElement, popupContainer) {
		this.game = game;
		this.glassElement = glassElement;
		this.popupContainer = popupContainer;
		this.firstPopup = new FirstPopupController(this);
		this.helpPopup = new HelpPopupController(this);
		this.chooseUserPopup = new ChooseUserPopupController(this);
		this.view = new PopupView(this);
		this.start(popupContainer);
		this.displayFirstPopup();
	}

	Popup.prototype.start = function(element) {
		this.firstPopup.start(this.popupContainer);
		this.helpPopup.start(this.popupContainer);
		this.chooseUserPopup.start(this.popupContainer);
	};

	Popup.prototype.startGame = function() {
		this.view.hidePopup();
		this.game.resume();
	};

	Popup.prototype.displayFirstPopup = function() {
		this.view.displayFirstPopup();
	};

	Popup.prototype.displayHelpPopup = function() {
		this.view.displayHelpPopup();
	};

	Popup.prototype.displayChooseUserPopup = function() {
		this.view.displayChooseUserPopup();
	};

	return Popup;

})();