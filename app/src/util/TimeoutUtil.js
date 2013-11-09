var TimeoutUtil = (function() {

  return {

    timeout: function(callback, time, context) {
      return setTimeout(function() {
				callback.call(context);
      }, time);
    }

  };

})();