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
    hasClassName: function(element, className) {
      return element.classList.contains(className);
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
    buildButton: function(label, className, onClick, onClickContext) {
      var button = buildElement('button');
      if(className !== '') {
        button.className = 'btn ' + className;
      } else {
        button.className = 'btn';
      }
      button.innerHTML = label;
      if(onClick !== undefined) {
        ClickUtil.listen(button, onClick, onClickContext);
      }
      return button;
    },
    buildMainButton: function(label, className, onClick, onClickContext) {
      var button = buildElement('button');
      if(className !== '') {
        button.className = 'btn-main ' + className;
      } else {
        button.className = 'btn-main';
      }
      button.innerHTML = label;
      if(onClick !== undefined) {
        ClickUtil.listen(button, onClick, onClickContext);
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