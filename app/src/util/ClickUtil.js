var ClickUtil = (function() {

	'use strict';

  return {

    listen: function(element, callback, context) {
      return element.onclick = function() {
        if(context !== undefined) {
          callback.call(context);
        } else {
          callback();
        }
      };
    }

  };

})();