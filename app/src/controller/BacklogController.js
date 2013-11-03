var BacklogController = (function() {

	'use strict';

	function Backlog() {
		this.view = new BacklogView(this);
		this.cards = [];
	}

	Backlog.prototype.addCard = function() {
		var card = new CardController();
		this.cards.push(card);
		return card;
	};

	Backlog.prototype.removeCard = function(card) {
		var index = this.cards.indexOf(card);
		if (index > -1) {
			this.cards.splice(index, 1);
		}
	};

	return Backlog;

})();

