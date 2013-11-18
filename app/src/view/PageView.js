var PageView = (function() {

  'use strict';

  function Page(controller) {
    Page.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('page');
  }

  ObjectUtil.inherit(Page, AbstractView);

  Page.prototype.showFirstPage = function() {
    var b = document.createElement('button');
    this.container.className = 'page firstPage';
    this.container.innerHTML = [
      '<img src="assets/img/panicbacklog_logo.png" alt="Panic Backlog" class="mainlogo" /><h1 class="title">', LangUtil.get('firstPageTile'), '</h1>',
      '<div class="content">',
      LangUtil.get('firstPageDescription'),
      '</div>',
      '<footer class="footer">', '', '</footer>'
    ].join('');
    var title = this.container.getElementsByTagName('h1')[0];
    var lang = new LangController();
    lang.start(title);
    var footer = this.container.getElementsByTagName('footer')[0];
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('firstPageHelp'), 
      this.controller.showHelpPage, this.controller
    ));
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('firstPageStart'), 
      this.controller.showChooseUserPage, this.controller
    ));
  };

  Page.prototype.showHelpPage = function() {
    this.container.className = 'page helpPage';
    this.container.innerHTML = [
      '<h1 class="title">', LangUtil.get('helpPageTitle'), '</h1>',
      '<div class="content"></div>',
      '<footer class="footer">', '', '</footer>'
    ].join('');
    var footer = this.container.getElementsByTagName('footer')[0];
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('helpPageBack'), 
      this.controller.showFirstPage, this.controller
    ));
  };

  Page.prototype.showChooseUserPage = function() {
    this.container.className = 'page chooseUserPage';
    this.container.innerHTML = [
      '<h1 class="title">', LangUtil.get('chooseUserPageTitle'), '</h1>',
      '<div class="content"></div>',
      '<footer class="footer">', '', '</footer>'
    ].join('');
    var content = this.container.getElementsByClassName('content')[0];
    _.each(Constants.TEAMS, function(team) {
      content.appendChild(ViewUtil.buildButtonImg(
        'logo ' + team, 
        '', 
        function() {
          this.controller.onChooseTeam(team);
        }, 
        this
      ));
    }, this);
    var footer = this.container.getElementsByTagName('footer')[0];
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('chooseUserPageBack'), 
      this.controller.showFirstPage, this.controller
    ));
  };

  Page.prototype.showGithubPage = function() {
    this.container.className = 'page githubPage';
    this.container.innerHTML = [
      '<h1 class="title">', LangUtil.get('githubPageTitle'), '</h1>',
      '<div class="content"></div>',
      '<footer class="footer">', '', '</footer>'
    ].join('');
    var footer = this.container.getElementsByTagName('footer')[0];
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('githubPageBack'), 
      this.controller.showChooseUserPage, this.controller
    ));
  };

  Page.prototype.getContentPage = function() {
    return this.container.getElementsByClassName('content')[0];
  };

  return Page;

})();