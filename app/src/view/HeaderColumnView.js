var HeaderColumnView = (function() {

	'use strict';

	function HeaderColumn(controller) {
		this.controller = controller;
		this.container = buildContainer();
	}

	HeaderColumn.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	function buildContainer() {
		var div = document.createElement('div');
		div.className = 'headerColumn';
		return div;
	}

	return HeaderColumn;

})();

