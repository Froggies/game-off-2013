var ColumnController = (function() {

	'use strict';

	function Column(game) {
		this.game = game;
		this.view = new ColumnView(this);
		this.isActive = false;
		this.canBeActivate = false;
		this.header = new HeaderColumnController(this);
		this.rows = [];
		this.cardTimeout = undefined;
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

	Column.prototype.setCanBeActivate = function(bool) {
		this.canBeActivate = bool;
		this.view.refreshCanBeActivate();
		this.header.setCanBeActivate(bool);
	};

	Column.prototype.activate = function() {
		if(this.canBeActivate === true) {
			this.isActive = true;
			this.canBeActivate = false;
			this.view.refreshCanBeActivate();
			this.header.setCanBeActivate(false);
			this.view.activate();
			this.activeNextRow();
			this.game.columnIsActivated();
		}
	};

	Column.prototype.activeNextRow = function() {
		if(this.isActive === true) {
			var potentielRow = _.find(this.rows, function(row) {
				return row.isActive === false;
			});
			if(potentielRow !== undefined) {
				potentielRow.activate();
			}
		}
	};

	Column.prototype.newCurrentCard = function() {
		if(this.rows[0].card !== undefined) {
			var that = this;
			this.cardTimeout = window.setTimeout(function() {
				var card = that.rows[0].card;
				if(card !== undefined) {
					card.time = card.time - 0.1;
					card.refreshView();
					if(card.time <= 0) {
						that.timeFinish();
					} else {
						that.newCurrentCard();
					}
				}
			}, 100);
		}
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

	Column.prototype.pause = function() {
		window.clearInterval(this.cardTimeout);
		this.cardTimeout = undefined;
	};

	Column.prototype.resume = function() {
		if(this.cardTimeout === undefined && this.rows[0].card !== undefined) {
			this.newCurrentCard();
		}
	};

	Column.prototype.search3cardsAdjacent = function(prevColumn, nextColumn) {
		var prevRow, nextRow;
		if(this.rows[0].card !== undefined) {
			for (var i = 0; i < this.rows.length; i++) {
				var row = this.rows[i];
				var index = _.indexOf(this.rows, row);
				if(index < this.rows.length) {
					nextRow = this.rows[index+1];
				}
				//first search in ligne
				var points = row.search3cardsAdjacent(prevRow, nextRow);
				if(points !== false) {
					return points;
				}
				//second search in column
				if(prevColumn !== undefined && nextColumn !== undefined) {
					if(prevColumn.rows[index].card !== undefined &&
						nextColumn.rows[index].card !== undefined) {
						if(prevColumn.rows[index].card.type === this.rows[index].card.type &&
							nextColumn.rows[index].card.type === this.rows[index].card.type) {
							points = prevColumn.rows[index].card.complexity;
							points = points + this.rows[index].card.complexity;
							points = points + nextColumn.rows[index].card.complexity;
							prevColumn.rows[index].removeCard();
							this.rows[index].removeCard();
							nextColumn.rows[index].removeCard();
							return points;
						}
					}
				}
				prevRow = row;
			}
		}
		return false;
	};

	return Column;

})();

