var ClickUtil = (function() {

  return {

    listen: function(element, callback, context) {
      return element.onclick = function() {
				callback.call(context);
      };
    }

  };

})();