var ViewUtil = (function() {

	'use strict';

  function buildElement(type) {
    return document.createElement(type);
  }

  return {

    addClassName: function(element, className) {
      element.classList.add(className);
    },
    removeClassName: function(element, className) {
      element.classList.remove(className);
    },
    buildContainer: function(className) {
      var div = buildElement('div');
      div.className = className;
      return div;
    },
    buildImg: function(url) {
      var img = buildElement('img');
      img.src = url;
      return img;
    },
    buildButton: function(label, onClick, onClickContext) {
      var button = buildElement('button');
      button.innerHTML = label;
      if(onClick !== undefined) {
        ClickUtil.listen(button, onClick, onClickContext);
      }
      return button;
    },
    buildButtonImg: function(url, label, onClick, onClickContext) {
      var button = ViewUtil.buildButton('', onClick, onClickContext);
      var img = ViewUtil.buildImg(url);
      button.appendChild(img);
      if(label !== '') {
        var l = buildElement('div');
        l.innerHTML = label;
        button.appendChild(l);
      }
      return button;
    },
    buildElement: function(className, type) {
      var element = buildElement(type);
      element.className = className;
      return element;
    },
    activeButton: function(button) {
      button.removeAttribute('disabled');
    },
    inactiveButton: function(button) {
      button.setAttribute('disabled', 'disabled');
    }

  };

})();