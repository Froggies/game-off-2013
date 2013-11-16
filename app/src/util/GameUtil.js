var GameUtil = (function() {

	'use strict';

  return {

    calculTimeNewCard: function(score) {
			var s = score / Constants.SCORE_FACTOR;
			var time = (-1.109 * s) + Constants.FPS;
			if(time > Constants.FPS_MIN) {
				return time;
			} else {
				return Constants.FPS_MIN;
			}
    }

  };

})();