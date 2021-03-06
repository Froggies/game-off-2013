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
    AudioUtil.accueil();
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

  Page.prototype.showToolPage = function() {
    this.view.showToolPage();
  };

  Page.prototype.showEndPage = function() {
    AudioUtil.end();
    this.globalContainer.innerHTML = '';
    this.start(this.globalContainer);
    this.view.showEndPage();
  };

  Page.prototype.showCompatibilityPage = function() {
    this.view.showCompatibilityPage();
  };

  Page.prototype.onChooseTeam = function(team) {
    if(team === 'github') {
      this.showGithubPage();
      var g = new GithubController(this);
      g.start(this.view.getContentPage());
    } else if(team === 'froggies') {
      this.startGame(
        [
          {avatar_url: 'assets/img/team/froggies/audrey.jpg'}, 
          {avatar_url: 'assets/img/team/froggies/adeline.jpg'}, 
          {avatar_url: 'assets/img/team/froggies/laurent.jpg'}, 
          {avatar_url: 'assets/img/team/froggies/julien.jpg'}, 
          {avatar_url: 'assets/img/team/froggies/vivian.jpg'},
          {avatar_url: 'assets/img/team/froggies/romain.jpg'}
        ]
      );
    } else {
      this.startGame(team);
    }
  };

  Page.prototype.startGame = function(team) {
    AudioUtil.inGame();
    this.globalContainer.innerHTML = '';
    this.team = team;
    var game = new GameController(team, this);

    var popups = new PopupController(
      game, 
      document.getElementById('glass'), 
      document.getElementsByTagName('body')[0]
    );

    popups.start();

    game.popupController = popups;

    game.columns[0].setCanBeActivate(true);
    game.columns[0].activate();
    game.columns[0].setCanBeActivate(false);

    game.start(this.globalContainer);
  };

  return Page;

})();