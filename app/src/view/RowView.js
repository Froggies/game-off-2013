var RowView = (function() {

	'use strict';

	function Row(controller) {
		this.controller = controller;
		this.container = buildContainer();
	}

	Row.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	function buildContainer() {
		var div = document.createElement('div');
		div.className = 'row';
		return div;
	}

	return Row;

})();

