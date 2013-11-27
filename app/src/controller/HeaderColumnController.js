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

  HeaderColumn.prototype.resign = function() {
    this.isActive = false;
    this.canBeActivate = false;
    this.view.resign();
  };

  HeaderColumn.prototype.setCanBeActivate = function(bool) {
    this.canBeActivate = bool;
    this.view.refreshCanBeActivate();
  };

  /*must be call by view only*/
  HeaderColumn.prototype.internalActivate = function() {
    this.columnController.activate();
  };

  /*will be call by columnController*/
  HeaderColumn.prototype.activate = function() {
    if(this.canBeActivate === true) {
      this.isActive = true;
      this.view.activate();
    }
  };

  return HeaderColumn;

})();