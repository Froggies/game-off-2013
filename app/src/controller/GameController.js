var GameController = (function() {

	'use strict';

	function Game() {
		this.fps = 50;
		this.nbLoop = 0;
		this.timeout = undefined;
		this.backlog = undefined;

		this.view = new GameView(this);
	}

	Game.prototype.start = function() {
		this.backlog = new BacklogController();
		this.resume();
	};

	Game.prototype.pause = function() {
		window.clearInterval(this.timeout);
		this.timeout = undefined;
	};

	Game.prototype.resume = function() {
		if(this.timeout === undefined) {
			this.timeout = window.setInterval(function() {
				this.nbLoop = this.nbLoop + 1;
			}, this.fps);
		}
	};

	return Game;

})();

