var GameView = (function() {

	'use strict';

	function Game(controller) {
		this.controller = controller;
		this.container = buildContainer();
	}

	Game.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	function buildContainer() {
		var div = document.createElement('div');
		div.className = 'game';
		return div;
	}

	return Game;

})();

