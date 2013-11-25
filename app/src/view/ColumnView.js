var ColumnView = (function() {

  'use strict';

  function Column(controller) {
    Column.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('column inactive');
    var that = this;
    DragAndDropUtil.makeDroppable(this.container, function(elementDragged) {
      return controller.addCard(elementDragged.controller);
    });
  }

  ObjectUtil.inherit(Column, AbstractView);

  Column.prototype.refreshClass = function() {
    if(this.controller.isActive === true && 
      this.controller.hasCard === true) {
      this.container.className = 'column active';
      AudioUtil.keyboard();
    } else if(this.controller.isActive === true && 
      this.controller.hasCard === false) {
      this.container.className = 'column active waiting';
      AudioUtil.keyboardStop();
    } else {
      this.container.className = 'column inactive';
      AudioUtil.keyboardStop();
    }
  };

  Column.prototype.activate = function() {
    this.container.className = 'column active';
  };

  Column.prototype.inactivate = function() {
    this.container.className = 'column inactive';
  };

  Column.prototype.addDiv = function() {
    this.container.appendChild(ViewUtil.buildContainer('dev'));
  };

  return Column;

})();

