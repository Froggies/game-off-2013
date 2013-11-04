var ColumnView = (function() {

	'use strict';

	function ColumnView(controller) {
		this.controller = controller;
		this.container = UtilView.buildContainer('column');
	}

	ColumnView.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	return ColumnView;

})();

