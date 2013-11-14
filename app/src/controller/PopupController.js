var PopupController = (function() {

	'use strict';

	function Popup(game, glassElement, popupContainer) {
		this.game = game;
		this.glassElement = glassElement;
		this.popupContainer = popupContainer;
		this.chooseBonusPopup = new ChooseBonusPopupController(this);
		this.pausePopup = new PausePopupController(this);
		this.view = new PopupView(this);
	}

	Popup.prototype.start = function() {
		this.chooseBonusPopup.start(this.popupContainer);
		this.pausePopup.start(this.popupContainer);
		this.view.hidePopup();
	};

	Popup.prototype.hide = function() {
		this.view.hidePopup();
	};

	Popup.prototype.startGame = function() {
		this.view.hidePopup();
		this.game.resume();
	};

	Popup.prototype.displayChooseBonusPopup = function() {
		this.view.displayChooseBonusPopup();
	};

	Popup.prototype.displayPausePopup = function() {
		this.view.displayPausePopup();
	};

	return Popup;

})();