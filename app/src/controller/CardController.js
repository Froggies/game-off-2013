var CardController = (function() {

	'use strict';

	function Card(type, complexity, time) {
		this.type = type;
		this.complexity = complexity;
		this.initialTime = time;
		this.time = time;
		this.view = new CardView(this);
	}

	Card.prototype.start = function(element) {
		this.view.draw(element);
	};

	Card.prototype.refreshView = function() {
		this.view.refresh();
	};

	return Card;

})();

