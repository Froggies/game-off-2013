var ScoreController = (function() {

	'use strict';

	function Score() {
		this.score = 0;
		this.level = 0;
		this.nbLife = Constants.NB_LIFE;
		this.view = new ScoreView(this);
	}

	ObjectUtil.inherit(Score, AbstractController);

	Score.prototype.incrementeBy = function(score) {
		this.score = this.score + score;
		this.view.updateScore();
	};

	Score.prototype.updateLevel = function() {
		this.level = this.level + 1;
		this.view.updateLevel();
	};

	Score.prototype.loose = function() {
		this.nbLife = this.nbLife - 1;
		this.view.updateLife();
		if(this.nbLife === 0) {
			window.alert('Game Over');
		}
	};

	return Score;

})();