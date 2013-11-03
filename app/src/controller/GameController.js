var GameController = (function() {

	'use strict';

	function Game() {
		this.fps = 1000;
		this.nbLoop = 0;
		this.timeout = undefined;

		this.view = new GameView(this);
		this.backlog = new BacklogController();
		this.columns = [new ColumnController(), new ColumnController(), new ColumnController(), new ColumnController(), new ColumnController()];
	}

	Game.prototype.start = function(element) {
		this.view.draw(element);
		for(var indexColumn=0; indexColumn < this.columns.length; indexColumn++) {
			this.columns[indexColumn].start(this.view.container);
		}
		this.backlog.start(this.view.container);
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
			}, this.fps);
		}
	};

	Game.prototype.loop = function() {
		this.nbLoop = this.nbLoop + 1;
		this.backlog.addCard();
		if(this.backlog.cards.length > 10) {
			this.pause();
			window.alert('Game over');
			return 'finish';
		}
	};

	return Game;

})();

