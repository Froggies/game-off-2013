var ScoreController = (function() {

	'use strict';

	function Score() {
		this.view = new ScoreView(this);
		this.score = 0;
		this.level = 0;
	}

	ObjectUtil.inherit(Score, AbstractController);

	Score.prototype.incrementeBy = function(score) {
		this.score = this.score + score;
		this.view.updateScore();
	};

	return Score;

})();