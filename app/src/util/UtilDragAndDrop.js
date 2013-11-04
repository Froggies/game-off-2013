var UtilDragAndDrop = (function() {

  var lastElementDragged;//one at same time... normally :D

  return {

    makeDraggable: function(element) {
      element.draggable = true;
      element.ondragstart = function(evt) {
        lastElementDragged = element;
      };
    },
    makeUndraggable: function(element) {
      element.draggable = false;
      element.ondragstart = undefined;
    },
    makeDroppable: function(element) {
      element.ondragenter = function (evt) {
        event.preventDefault();
        return true;
      };
      element.ondragover = function(evt) {
        return false;
      };
      element.ondrop = function (evt) {
        element.appendChild(lastElementDragged);
        UtilDragAndDrop.makeUndraggable(lastElementDragged);
        evt.stopPropagation();
        return false;
      };
    }

  };

})();