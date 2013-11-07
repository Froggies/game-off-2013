var GameUtil = (function() {

  return {

    calculTimeNewCard: function(score) {
			var time = (-2.307 * score) + Constants.FPS;
			if(time > Constants.FPS_MIN) {
				return time;
			} else {
				return Constants.FPS_MIN;
			}
    }

  };

})();