var ScoreUtil = (function() {

  return {

    isNextLevel: function(score, level) {
      return (score / 3) > level + 2;
    }

  };

})();