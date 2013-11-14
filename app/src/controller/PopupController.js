var PopupController = (function() {

	'use strict';

	function Popup(game, glassElement, popupContainer) {
		this.game = game;
		this.glassElement = glassElement;
		this.chooseBonusPopup = new ChooseBonusPopupController(this);
		this.view = new PopupView(this);
	}

	Popup.prototype.start = function(element) {
		this.chooseBonusPopup.start(this.popupContainer);
	};

	Popup.prototype.startGame = function() {
		this.view.hidePopup();
		this.game.resume();
	};

	Popup.prototype.displayChooseBonusPopup = function() {
		this.view.displayChooseBonusPopup();
	};

	return Popup;

})();