var ColumnController = (function() {

	'use strict';

	function Column(game) {
		this.game = game;
		this.view = new ColumnView(this);
		this.isActive = false;
		this.header = new HeaderColumnController();
		this.rows = [];
		for(var i=0; i<Constants.NB_ROWS; i++) {
			this.rows.push(new RowController());
		}
	}

	Column.prototype.start = function(element) {
		this.view.draw(element);
		this.header.start(this.view.container);
		_.each(this.rows, function(row) {
			row.start(this.view.container);
		}, this);
	};

	Column.prototype.activate = function() {
		this.isActive = true;
		this.view.activate();
	};

	Column.prototype.activeNextRow = function() {
		var potentielRow = _.find(this.rows, function(row) {
			return row.isActive === false;
		});
		if(potentielRow !== undefined) {
			potentielRow.activate();
		}
	};

	Column.prototype.newCurrentCard = function() {
		var that = this;
		window.setTimeout(function() {
			that.timeFinish();
		}, this.rows[0].card.time * 1000);
	};

	Column.prototype.addCard = function(card) {
		for(var i=0; i < this.rows.length; i++) {
			if(this.rows[i].canAcceptCard() === true) {
				this.rows[i].addCard(card);
				this.game.deleteCardInBacklog(card);
				if(i === 0) {
					this.newCurrentCard();
				}
				return true;
			}
		}
		return false;
	};

	Column.prototype.timeFinish = function() {
		this.game.incrementeScore(this.rows[0].card.complexity);
		this.rows[0].removeCard();
		var previousRow;
		_.each(this.rows, function(row) {
			if(row.card !== undefined && previousRow !== undefined) {
				previousRow.addCard(row.card);
				row.removeCard();
				if(previousRow === this.rows[0]) {
					this.newCurrentCard();
				}
			}
			previousRow = row;
		}, this);
	};

	return Column;

})();

