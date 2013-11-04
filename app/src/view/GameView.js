var GameView = (function() {

	'use strict';

	function Game(controller) {
		this.controller = controller;
		this.container = UtilView.buildContainer('game');
	}

	Game.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	return Game;

})();

