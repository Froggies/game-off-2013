var ColumnController = (function() {

	'use strict';

	var NB_ROW = 5;

	function Column() {
		this.view = new ColumnView(this);
		this.header = new HeaderColumnController();
		this.rows = [];
		for(var i=0; i<NB_ROW; i++) {
			this.rows.push(new RowController());
		}
	}

	Column.prototype.start = function(element) {
		this.view.draw(element);
		this.header.start(this.view.container);
		for(var i=0; i < this.rows.length; i++) {
			this.rows[i].start(this.view.container);
		}
	};

	return Column;

})();

