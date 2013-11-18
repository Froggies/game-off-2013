var HeaderColumnView = (function() {

  'use strict';

  function HeaderColumn(controller, team) {
    HeaderColumn.parent.constructor.apply(this, arguments);
    this.team = team;
    this.index = this.controller.index;
    this.isArrayTeam = _.isArray(team);
    if(this.isArrayTeam) {
      this.classes = ['headerColumn', 'classic', 'index' + this.index];
    } else {
      this.classes = ['headerColumn', team, 'index' + this.index];
    }
    this.container = ViewUtil.buildContainer(this.classes.join(' '));
    if(this.index === 0) {
      this.activate();
    }
    ClickUtil.listen(this.container, function() {
      this.onClick(); 
    }, this);
  }

  ObjectUtil.inherit(HeaderColumn, AbstractView);

  HeaderColumn.prototype.refreshCanBeActivate = function() {
    this.container.className = this.classes.join(' ') + ' canBeActive ' + this.controller.canBeActivate;
  };

  HeaderColumn.prototype.activate = function() {
    if(this.isArrayTeam) {
      this.container.style.backgroundImage = 'url('+this.team[this.index].avatar_url+')';
    }
  };

  HeaderColumn.prototype.onClick = function() {
    this.controller.activate();
  };

  return HeaderColumn;

})();

