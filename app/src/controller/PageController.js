var PageController = (function() {

  'use strict';

  function Page(globalContainer) {
    this.globalContainer = globalContainer;
    this.view = new PageView(this);
    var helpConfig = [
      {img: 'assets/img/help/game/1.png', sentenceKey: 'helpGame1'},
      {img: 'assets/img/help/game/2.png', sentenceKey: 'helpGame2'},
      {img: 'assets/img/help/game/3.png', sentenceKey: 'helpGame3'},
      {img: 'assets/img/help/game/4.png', sentenceKey: 'helpGame4'},
      {img: 'assets/img/help/game/5.png', sentenceKey: 'helpGame5'},
      {img: 'assets/img/help/game/6.png', sentenceKey: 'helpGame6'},
      {img: 'assets/img/help/game/7.png', sentenceKey: 'helpGame7'},
      {img: 'assets/img/help/game/8.png', sentenceKey: 'helpGame8'},
      {img: 'assets/img/help/game/9.png', sentenceKey: 'helpGame9'}
    ];
    this.helpController = new HelpController(helpConfig);
    this.showFirstPage();
  }

  ObjectUtil.inherit(Page, AbstractController);

  Page.prototype.showFirstPage = function() {
    this.view.showFirstPage();
  };

  Page.prototype.showHelpPage = function() {
    this.view.showHelpPage();
    this.helpController.start(this.view.getContentPage());
  };

  Page.prototype.showChooseUserPage = function() {
    this.view.showChooseUserPage();
  };

  Page.prototype.showGithubPage = function() {
    this.view.showGithubPage();
  };

  Page.prototype.showCreditsPage = function() {
    this.view.showCreditsPage();
  };

  Page.prototype.onChooseTeam = function(team) {
    if(team === 'github') {
      this.showGithubPage();
      var g = new GithubController(this);
      g.start(this.view.getContentPage());
    } else {
      this.startGame(team);
    }
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