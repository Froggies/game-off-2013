var HeaderColumnView = (function() {

	'use strict';

	function HeaderColumn(controller) {
		this.controller = controller;
		this.container = ViewUtil.buildContainer('headerColumn');
	}

	HeaderColumn.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	return HeaderColumn;

})();

