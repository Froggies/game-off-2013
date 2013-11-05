var UtilDragAndDrop = (function() {

  var lastElementDragged;//one at same time... normally :D

  function makeUndraggable(element) {
    element.container.draggable = false;
    element.container.ondragstart = undefined;
  }

  return {

    makeDraggable: function(element) {
      element.container.draggable = true;
      element.container.ondragstart = function(evt) {
        lastElementDragged = element;
      };
    },
    makeDroppable: function(element, callback) {
      element.ondragenter = function (evt) {
        event.preventDefault();
        return true;
      };
      element.ondragover = function(evt) {
        return false;
      };
      element.ondrop = function (evt) {
        evt.stopPropagation();
        if(callback !== undefined) {
          if(callback(lastElementDragged) === true) {
            makeUndraggable(lastElementDragged);
          }
        }
        return false;
      };
    }

  };

})();