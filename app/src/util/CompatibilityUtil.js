var CompatibilityUtil = (function() {

	'use strict';

  //from http://diveintohtml5.info/everything.html
  function hasDragAndDrop() {
    try {
      return 'draggable' in document.createElement('span');
    } catch(e) {
      return false;
    }
  }

  //from http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
  function hasCssTransition() {
    try {
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
    } catch(e) {
      return false;
    }
    return false;
  }

  //from http://diveintohtml5.info/everything.html
  function hasAjaxRequest() {
    try {
      if(window.XMLHttpRequest) {
        return 'withCredentials' in new XMLHttpRequest();
      }
    } catch(e) {
      return false;
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

  //from http://diveintohtml5.info/everything.html
  function hasAudioMp3() {
    try {
      var a = document.createElement('audio');
      return !!a.canPlayType &&
        !!(a.canPlayType('audio/mpeg;').replace(/no/, ''));
    } catch(e) {
      return false;
    }
  }

  //from http://diveintohtml5.info/everything.html
  function hasAudioWav() {
    try {
      var a = document.createElement('audio');
      return !!a.canPlayType &&
        !!(a.canPlayType('audio/wav; codecs="1"').replace(/no/, ''));
    } catch(e) {
      return false;
    }
  }

  //from http://diveintohtml5.info/everything.html
  function hasAudioOgg() {
    try {
      var a = document.createElement('audio');
      return !!a.canPlayType &&
        !!(a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
    } catch(e) {
      return false;
    }
  }

  return {

    isCompatible: function() {
      return hasDragAndDrop() && 
        hasCssTransition() && 
        hasAjaxRequest() && 
        hasLocalStorage() &&
        (hasAudioMp3() || hasAudioWav() || hasAudioOgg());
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
    },
    hasAudioMp3: function() {
      return hasAudioMp3();
    },
    hasAudioWav: function() {
      return hasAudioWav();
    },
    hasAudioOgg: function() {
      return hasAudioOgg();
    }

  };

})();