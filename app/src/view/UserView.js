var UserView = (function() {

  'use strict';

  function User(controller) {
    User.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('user');
    this.avatar = ViewUtil.buildContainer('logo ' + this.controller.game.team);
    this.container.appendChild(this.avatar);
  }

  ObjectUtil.inherit(User, AbstractView);

  User.prototype.draw = function(element) {
    User.parent.draw.apply(this, arguments);
    this.refresh();
  };

  User.prototype.refresh = function() {
  };

  return User;

})();

