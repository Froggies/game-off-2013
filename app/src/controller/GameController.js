var GameController = (function() {

	'use strict';

	function Game() {
		this.nbLoop = 0;
		this.timeout = undefined;

		this.view = new GameView(this);
		this.backlog = new BacklogController();
		this.score = new ScoreController();
		this.columns = [];
		for(var i=0; i<Constants.NB_COLUMNS; i++) {
			this.columns.push(new ColumnController(this));
		}
	}

	Game.prototype.start = function(element) {
		this.view.draw(element);
		this.backlog.start(this.view.container);
		for(var indexColumn=0; indexColumn < this.columns.length; indexColumn++) {
			this.columns[indexColumn].start(this.view.container);
		}
		this.score.start(this.view.container);
		this.resume();
	};

	Game.prototype.pause = function() {
		window.clearInterval(this.timeout);
		this.timeout = undefined;
	};

	Game.prototype.resume = function() {
		if(this.timeout === undefined) {
			var that = this;
			this.timeout = window.setInterval(function() {
				that.loop();
			}, Constants.FPS);
		}
	};

	Game.prototype.deleteCardInBacklog = function(card) {
		this.backlog.removeCard(card);
	};

	Game.prototype.incrementeScore = function(score) {
		this.score.incrementeBy(score);
		if(ScoreUtil.isNextLevel(this.score.score, this.score.level) === true) {
			this.score.level = this.score.level + 1;
			this.score.incrementeBy(0);
			var column = _.find(this.columns, function(column) {
				return column.isActive === false;
			}, this);
			if(column !== undefined) {
				column.activate();
				column.activeNextRow();
			} else {
				var columnWithRowInactive = _.find(this.columns, function(column) {
					return _.find(column.rows, function(row) {
						return row.isActive === false;
					});
				}, this);
				if(columnWithRowInactive !== undefined) {
					columnWithRowInactive.activeNextRow();
				}
			}
		}
	};

	Game.prototype.loop = function() {
		this.nbLoop = this.nbLoop + 1;
		this.backlog.addCard(CardUtil.buildCard());
		if(this.backlog.cards.length > 10) {
			this.pause();
			window.alert('Game over');
			return 'finish';
		}
	};

	return Game;

})();

