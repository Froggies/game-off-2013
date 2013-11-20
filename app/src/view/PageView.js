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
    this.container.innerHTML = '<img src="assets/img/panicbacklog_logo.png" alt="Panic Backlog" class="mainlogo" /><footer class="footer"></footer>';
    var title = this.container.getElementsByTagName('h1')[0];
    var lang = new LangController();
    lang.start(this.container);
    var footer = this.container.getElementsByTagName('footer')[0];
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('firstPageHelp'),
      this.controller.showHelpPage, this.controller
    ));
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('firstPageCredits'),
      this.controller.showCreditsPage, this.controller
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

  function buildMember(pseudo, sentence, github, facebook, googleplus, twitter, linkedin, viadeo) {
    return [
      '<div class="member ', pseudo,'">',
      '<a href="', github,'" class="network github ', github === '' ? 'inactive' : '', '" target="_blank"></a>',
      '<a href="', facebook, '" class="network facebook ', facebook === '' ? 'inactive' : '', '" target="_blank"></a>',
      '<a href="', googleplus, '" class="network googleplus ', googleplus === '' ? 'inactive' : '', '" target="_blank"></a>',
      '<a href="', twitter, '" class="network twitter ', twitter === '' ? 'inactive' : '', '" target="_blank"></a>',
      '<a href="', linkedin, '" class="network linkedin ', linkedin === '' ? 'inactive' : '', '" target="_blank"></a>',
      '<a href="', viadeo, '" class="network viadeo ', viadeo === '' ? 'inactive' : '', '" target="_blank"></a>',
      '<div class="bubble">', sentence, '</div></div>'
    ].join('');
  }

  Page.prototype.showCreditsPage = function() {
    this.container.className = 'page creditsPage';
    this.container.innerHTML = [
      '<h1 class="title">', LangUtil.get('creditsPageTitle'), '</h1>',
      '<div class="content">', 
      LangUtil.get('creditsPageSentence'),
      '<div class="froggies">',
      buildMember('audrey', LangUtil.get('creditsPageAudreySentence'), 'https://github.com/audreyn', '', '', 'https://twitter.com/udr3y', '', ''),
      buildMember('laurent', LangUtil.get('creditsPageLaurentSentence'), 'https://github.com/undless', 'https://www.facebook.com/laurent.dufour.3152', 'https://plus.google.com/u/0/107033330099598983714/posts?tab=XX', 'https://twitter.com/_LaurentDufour', 'http://fr.linkedin.com/pub/laurent-dufour/33/49/30', 'http://fr.viadeo.com/fr/profile/laurent.dufour1492'),
      buildMember('romain', LangUtil.get('creditsPageRomainSentence'), 'https://github.com/manland', 'https://www.facebook.com/romain.maneschi', 'https://plus.google.com/+RomainManeschi', 'https://twitter.com/RmManeschi', 'http://fr.linkedin.com/pub/romain-maneschi/5b/422/aa9', 'http://fr.viadeo.com/fr/profile/romain.maneschi%E2%80%8E'),
      '</div>',
      '</div>',
      '<footer class="footer">', '', '</footer>'
    ].join('');
    var footer = this.container.getElementsByTagName('footer')[0];
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('creditsPageBack'), 
      this.controller.showFirstPage, this.controller
    ));
  };

  Page.prototype.getContentPage = function() {
    return this.container.getElementsByClassName('content')[0];
  };

  return Page;

})();