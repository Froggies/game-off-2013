var ViewUtil = (function() {

  return {

    buildContainer: function(className) {
      var div = document.createElement('div');
      div.className = className;
      return div;
    }

  };

})();