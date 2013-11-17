var HeaderColumnView = (function() {

  'use strict';

  function HeaderColumn(controller, team) {
    HeaderColumn.parent.constructor.apply(this, arguments);
    this.team = team;
    this.classes = ['headerColumn', team, 'index' + this.controller.index];
    this.container = ViewUtil.buildContainer(this.classes.join(' '));
    
    ClickUtil.listen(this.container, function() {
      this.onClick(); 
    }, this);
  }

  ObjectUtil.inherit(HeaderColumn, AbstractView);

  HeaderColumn.prototype.refreshCanBeActivate = function() {
    this.container.className = this.classes.join(' ') + ' canBeActive ' + this.controller.canBeActivate;
  };

  HeaderColumn.prototype.onClick = function() {
    this.controller.activate();
  };

  return HeaderColumn;

})();

