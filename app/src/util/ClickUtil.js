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
    },
    listenDomElement: function(id, callback, context) {
			var element = document.getElementById(id);
			return ClickUtil.listen(element, callback, context);
    }

  };

})();