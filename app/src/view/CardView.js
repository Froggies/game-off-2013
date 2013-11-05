var CardView = (function() {

	'use strict';

	function Card(controller) {
		this.controller = controller;
		this.container = ViewUtil.buildContainer('card');
		DragAndDropUtil.makeDraggable(this);
	}

	Card.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	return Card;

})();

