var RowController = (function() {

	'use strict';

	function Row() {
		this.view = new RowView(this);
	}

	Row.prototype.start = function(element) {
		this.view.draw(element);
	};

	return Row;

})();