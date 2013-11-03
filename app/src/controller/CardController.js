var CardController = (function() {

	'use strict';

	function Card() {
		this.view = new CardView(this);
	}

	Card.prototype.start = function(element) {
		this.view.draw(element);
	};

	return Card;

})();

