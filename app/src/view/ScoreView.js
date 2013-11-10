var ScoreView = (function() {

	'use strict';

	function Score(controller) {
		Score.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('score');
	}

	ObjectUtil.inherit(Score, AbstractView);

	Score.prototype.draw = function(element) {
		element.appendChild(this.container);
		this.updateScore();
	};

	Score.prototype.updateScore = function() {
		this.container.innerHTML = this.controller.score + ' $ - LVL : ' + this.controller.level;
	};

	return Score;

})();

