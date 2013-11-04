var HeaderColumnController = (function() {

	'use strict';

	function HeaderColumn() {
		this.view = new HeaderColumnView(this);
	}

	HeaderColumn.prototype.start = function(element) {
		this.view.draw(element);
	};

	return HeaderColumn;

})();