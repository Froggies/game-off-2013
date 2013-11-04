var CardView = (function() {

	'use strict';

	function Card(controller) {
		this.controller = controller;
		this.container = UtilView.buildContainer('card');
	}

	Card.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	return Card;

})();

