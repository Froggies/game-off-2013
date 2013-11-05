var ColumnController = (function() {

	'use strict';

	var NB_ROW = 5;

	function Column(game) {
		this.game = game;
		this.view = new ColumnView(this);
		this.isActive = false;
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

	Column.prototype.activate = function() {
		this.isActive = true;
		this.view.activate();
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
				this.game.deleteCardInBacklog(card);
				return true;
			}
		}
		return false;
	};

	return Column;

})();

