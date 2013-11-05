var RowView = (function() {

	'use strict';

	function Row(controller) {
		this.controller = controller;
		this.container = ViewUtil.buildContainer('row inactive');
	}

	Row.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	Row.prototype.activate = function() {
		this.container.className = 'row active';
	};

	return Row;

})();

