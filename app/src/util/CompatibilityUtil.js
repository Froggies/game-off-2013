var CompatibilityUtil = (function() {

	'use strict';

  //from http://diveintohtml5.info/everything.html
  function hasDragAndDrop() {
    return 'draggable' in document.createElement('span');
  }

  //from http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
  function hasCssTransition() {
    var b = document.body || document.documentElement;
    var s = b.style;
    var p = 'transition';
    if(typeof s[p] === 'string') {return true; }

    // Tests for vendor specific prop
    var v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'];
    p = p.charAt(0).toUpperCase() + p.substr(1);
    for(var i=0; i<v.length; i++) {
      if(typeof s[v[i] + p] === 'string') { return true; }
    }
    return false;
  }

  //from http://diveintohtml5.info/everything.html
  function hasAjaxRequest() {
    if(window.XMLHttpRequest) {
      return 'withCredentials' in new XMLHttpRequest();
    }
    return false;
  }

  //from http://diveintohtml5.info/everything.html
  function hasLocalStorage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
      return false;
    }
  }

  return {

    isCompatible: function() {
      return hasDragAndDrop() && hasCssTransition() && hasAjaxRequest() && hasLocalStorage();
    },
    hasDragAndDrop: function() {
      return hasDragAndDrop();
    },
    hasCssTransition: function() {
      return hasCssTransition();
    },
    hasAjaxRequest: function() {
      return hasAjaxRequest();
    },
    hasLocalStorage: function() {
      return hasLocalStorage();
    }

  };

})();