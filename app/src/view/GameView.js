var GameView = (function() {

	'use strict';

	function Game(controller) {
		Game.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('game');
	}

	ObjectUtil.inherit(Game, AbstractView);

	return Game;

})();

