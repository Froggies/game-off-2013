var ColumnController = (function() {

	'use strict';

	function Column() {
		this.view = new ColumnView(this);
		this.cards = [new CardController(), new CardController(), new CardController(), new CardController(), new CardController()];
	}

	Column.prototype.start = function(element) {
		this.view.draw(element);
		for(var indexCard=0; indexCard < this.cards.length; indexCard++) {
			this.cards[indexCard].start(this.view.container);
		}
	};

	return Column;

})();

