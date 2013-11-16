var ScoreUtil = (function() {

	'use strict';

  return {

    isNextLevel: function(score, level) {
			var s = score / Constants.SCORE_FACTOR;
			return Math.sqrt(s, 0.5) > level;
    }

  };

})();