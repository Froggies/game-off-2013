var CardController = (function() {

	'use strict';

	function Card() {
		this.view = new CardView(this);
	}

	return Card;

})();

