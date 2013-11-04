var UtilDragAndDrop = (function() {

  var lastElementDragged;//one at same time... normally :D

  return {

    makeDraggable: function(element) {
      element.draggable = true;
      element.ondragstart = function(evt) {
        lastElementDragged = element;
        console.log('drag start');
      };
    },
    makeUndraggable: function(element) {
      element.draggable = false;
      element.ondragstart = undefined;
    },
    makeDroppable: function(element) {
      element.ondragenter = function (evt) {
        event.preventDefault();
        console.log('drag enter');
        return true;
      };
      element.ondragover = function(evt) {
        console.log('drag over');
        return false;
      };
      element.ondrop = function (evt) {
        element.appendChild(lastElementDragged);
        UtilDragAndDrop.makeUndraggable(lastElementDragged);
        evt.stopPropagation();
        console.log('drop');
        return false;
      };
    }

  };

})();