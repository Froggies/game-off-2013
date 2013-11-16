var ScoreView = (function() {

	'use strict';

	function Score(controller) {
		Score.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('score');
		this.containerScore = ViewUtil.buildContainer('dollar');
		this.container.appendChild(this.containerScore);
		this.containerLevel = ViewUtil.buildContainer('level');
		this.container.appendChild(this.containerLevel);
		this.containerLife = ViewUtil.buildContainer('life');
		this.container.appendChild(this.containerLife);
		for (var i = 0; i < Constants.NB_LIFE; i++) {
			if(this.controller.nbLife >= i) {
				this.containerLife.appendChild(ViewUtil.buildContainer('active'));
			} else {
				this.containerLife.appendChild(ViewUtil.buildContainer('inactive'));
			}
		}
		this.tempScore = 0;
	}

	ObjectUtil.inherit(Score, AbstractView);

	Score.prototype.draw = function(element) {
		element.appendChild(this.container);
		this.containerScore.innerHTML = '0 $';
	};

	Score.prototype.updateScore = function() {
		if(this.scoreInterval === undefined) {
			this.scoreInterval = TimeoutUtil.interval(function() {
				this.tempScore = this.tempScore + 1;
				this.containerScore.innerHTML = this.tempScore + ' $';
				if(this.tempScore >= this.controller.score) {
					window.clearInterval(this.scoreInterval);
					this.scoreInterval = undefined;
				}
			}, 300, this);
		}
	};

	Score.prototype.updateLife = function() {
		var index = 0;
		_.each(this.containerLife.children, function(element) {
			if(this.controller.nbLife > index) {
				element.className = 'active';
			} else {
				element.className = 'inactive';
			}
			index = index + 1;
		}, this);
	};

	Score.prototype.updateLevel = function() {
		this.containerLevel.innerHTML = 'level : ' + this.controller.level;
	};

	return Score;

})();

