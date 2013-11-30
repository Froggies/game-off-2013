var ViewUtil = (function() {

	'use strict';

  function buildElement(type) {
    return document.createElement(type);
  }

  return {

    addClassName: function(element, className) {
      if(CompatibilityUtil.hasClassList() === true) {
        element.classList.add(className);
      } else {
        element.className = element.className + ' ' + className;
      }
    },
    removeClassName: function(element, className) {
      if(CompatibilityUtil.hasClassList() === true) {
        element.classList.remove(className);
      }
      //no need else because game doens't start
    },
    hasClassName: function(element, className) {
      if(CompatibilityUtil.hasClassList() === true) {
        return element.classList.contains(className);
      }
      //no need else because game doens't start
      return false;
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