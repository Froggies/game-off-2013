var RowView = (function() {

	'use strict';

	function Row(controller) {
		this.controller = controller;
		this.container = UtilView.buildContainer('row');
	}

	Row.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	return Row;

})();

