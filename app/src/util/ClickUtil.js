var ClickUtil = (function() {

	'use strict';

  return {

    listen: function(element, callback, context) {
      return element.onclick = function(evt) {
        AudioUtil.click();
        if(context !== undefined) {
          callback.call(context, evt);
        } else {
          callback(evt);
        }
      };
    }

  };

})();