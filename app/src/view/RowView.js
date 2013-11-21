var RowView = (function() {

  'use strict';

  function Row(controller) {
    Row.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('row inactive');
  }

  ObjectUtil.inherit(Row, AbstractView);

  Row.prototype.activate = function() {
    this.container.className = 'row active';
  };

  Row.prototype.inactivate = function() {
    this.container.className = 'row inactive';
  };

  Row.prototype.clear = function() {
    this.container.innerHTML = '';
  };

  Row.prototype.refreshOccuped = function() {
    if(this.controller.card === undefined && this.controller.isActive === true) {
      this.container.className = 'row active';
    } else if(this.controller.card === undefined && this.controller.isActive === false) {
      this.container.className = 'row inactive';
    } else {
      this.container.className = 'row occuped';
    }
  };

  return Row;

})();

