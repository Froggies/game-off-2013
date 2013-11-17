var PageController = (function() {

  'use strict';

  function Page(globalContainer) {
    this.globalContainer = globalContainer;
    this.view = new PageView(this);
    this.showFirstPage();
  }

  ObjectUtil.inherit(Page, AbstractController);

  Page.prototype.showFirstPage = function() {
    this.view.showFirstPage();
  };

  Page.prototype.showHelpPage = function() {
    this.view.showHelpPage();
  };

  Page.prototype.showChooseUserPage = function() {
    this.view.showChooseUserPage();
  };

  Page.prototype.startGame = function(team) {
    this.globalContainer.innerHTML = '';
    var game = new GameController(team);

    var popups = new PopupController(
      game, 
      document.getElementById('glass'), 
      document.getElementsByTagName('body')[0]
    );

    popups.start();

    game.popupController = popups;

    game.columns[0].setCanBeActivate(true);
    game.columns[0].activate();
    game.pause();

    game.start(this.globalContainer);
  };

  return Page;

})();