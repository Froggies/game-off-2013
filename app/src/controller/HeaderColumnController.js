var HeaderColumnController = (function() {

  'use strict';

  function HeaderColumn(columnController, index) {
    this.isActive = false;
    this.canBeActivate = false;
    this.columnController = columnController;
    this.index = index;
    this.view = new HeaderColumnView(this, this.columnController.game.team);
  }

  ObjectUtil.inherit(HeaderColumn, AbstractController);

  HeaderColumn.prototype.setCanBeActivate = function(bool) {
    this.canBeActivate = bool;
    this.view.refreshCanBeActivate();
  };

  HeaderColumn.prototype.activate = function() {
    if(this.canBeActivate === true) {
      this.isActive = true;
      this.columnController.activate();
    }
  };

  return HeaderColumn;

})();