var RowController = (function() {

	'use strict';

	function Row() {
		this.view = new RowView(this);
		this.isActive = false;
		this.card = undefined;
	}

	Row.prototype.start = function(element) {
		this.view.draw(element);
	};

	Row.prototype.activate = function() {
		this.isActive = true;
		this.view.activate();
	};

	Row.prototype.canAcceptCard = function(card) {
		return this.isActive && this.card === undefined;
	};

	Row.prototype.addCard = function(card) {
		this.card = card;
		card.start(this.view.container);
	};

	Row.prototype.removeCard = function() {
		this.card = undefined;
		this.view.clear();
	};

	return Row;

})();