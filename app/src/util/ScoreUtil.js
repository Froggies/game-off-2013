var ScoreUtil = (function() {

  return {

    isNextLevel: function(score, level) {
			return Math.sqrt(score, 0.5) > level;
    }

  };

})();