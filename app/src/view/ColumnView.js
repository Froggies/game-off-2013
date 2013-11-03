var ColumnView = (function() {

	'use strict';

	function ColumnView(controller) {
		this.controller = controller;
		this.container = buildContainer();
	}

	ColumnView.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	function buildContainer() {
		var div = document.createElement('div');
		div.className = 'column';
		return div;
	}

	return ColumnView;

})();

