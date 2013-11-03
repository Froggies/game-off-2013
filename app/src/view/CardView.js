var CardView = (function() {

	'use strict';

	function Card(controller) {
		this.controller = controller;
		this.container = buildContainer();
	}

	Card.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	function buildContainer() {
		var div = document.createElement('div');
		div.className = 'card';
		return div;
	}

	return Card;

})();

