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

	Column.prototype.activeNextRow = function() {
		for(var i=0; i < this.rows.length; i++) {
			if(this.rows[i].isActive === false) {
				this.rows[i].activate();
				return;
			}
		}
	};

	Column.prototype.addCard = function(card) {
		for(var i=0; i < this.rows.length; i++) {
			if(this.rows[i].canAcceptCard() === true) {
				this.rows[i].addCard(card);
				return true;
			}
		}
		return false;
	};

	return Column;

})();

