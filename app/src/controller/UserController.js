var UserController = (function() {

  'use strict';

  function User(game) {
    this.game = game;
    this.view = new UserView(this);
  }

  ObjectUtil.inherit(User, AbstractController);

  User.prototype.refreshView = function() {
    this.view.refresh();
  };

  return User;

})();

