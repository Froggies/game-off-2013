var ScoreView = (function() {

	'use strict';

	function Score(controller) {
		this.controller = controller;
		this.container = ViewUtil.buildContainer('score');
	}

	Score.prototype.draw = function(element) {
		element.appendChild(this.container);
		this.updateScore();
	};

	Score.prototype.updateScore = function() {
		this.container.innerHTML = this.controller.score + ' $ - LVL : ' + this.controller.level;
	};

	return Score;

})();

