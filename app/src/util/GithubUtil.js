var GithubUtil = (function() {

  'use strict';

  //code from http://fr.wikipedia.org/wiki/XMLHttpRequest
  function createXhrObject() {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    }

    if (window.ActiveXObject) {
      var names = [
        'Msxml2.XMLHTTP.6.0',
        'Msxml2.XMLHTTP.3.0',
        'Msxml2.XMLHTTP',
        'Microsoft.XMLHTTP'
      ];
      for(var i in names) {
        try { 
          return new ActiveXObject(names[i]); 
        } catch(e) {}
      }
    }
    return null; // non supporté
  }

  return {
    call: function(url, callback, error, context) {
      var xhr = createXhrObject();
      xhr.open('GET', url, true);
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            callback.call(context, xhr.responseText);
          } else {
            error.call(context, xhr.statusText);
          }
        }
      };
      xhr.onerror = function (e) {
        error.call(context, xhr.statusText);
      };
      xhr.send(null);
    }
  };
})();