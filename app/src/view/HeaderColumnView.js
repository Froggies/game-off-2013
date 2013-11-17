var HeaderColumnView = (function() {

  'use strict';

  function HeaderColumn(controller, team) {
    HeaderColumn.parent.constructor.apply(this, arguments);
    this.team = team;
    this.container = ViewUtil.buildContainer('headerColumn ' + team + ' index' + this.controller.index);
    
    ClickUtil.listen(this.container, function() {
      this.onClick(); 
    }, this);
  }

  ObjectUtil.inherit(HeaderColumn, AbstractView);

  HeaderColumn.prototype.refreshCanBeActivate = function() {
    this.container.className = 'headerColumn ' + this.team + ' index' + this.controller.index + ' canBeActive ' + this.controller.canBeActivate;
  };

  HeaderColumn.prototype.onClick = function() {
    this.controller.activate();
  };

  return HeaderColumn;

})();

