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
      this.controller.canBeActivate === false &&
      this.controller.hasCard === true) {
      this.container.className = 'column active';
    } else if(this.controller.isActive === false && 
      this.controller.canBeActivate === true) {
      this.container.className = 'column canBeActive ' + this.controller.canBeActivate;
    } else if(this.controller.isActive === true && 
      this.controller.canBeActivate === true &&
      this.controller.hasCard === true) {
      this.container.className = 'column active canBeActive true';
    } else if(this.controller.isActive === true && 
      this.controller.canBeActivate === false &&
      this.controller.hasCard === false) {
      this.container.className = 'column active waiting';
    } else if(this.controller.isActive === true && 
      this.controller.canBeActivate === true &&
      this.controller.hasCard === false) {
      this.container.className = 'column active waiting canBeActive true';
    } else {
      this.container.className = 'column inactive canBeActive false';
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

