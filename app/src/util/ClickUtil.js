var ClickUtil = (function() {

	'use strict';

  return {

    listen: function(element, callback, context) {
      return element.onclick = function() {
				callback.call(context);
      };
    }

  };

})();