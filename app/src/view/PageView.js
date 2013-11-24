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
    this.container.innerHTML = '<img src="assets/img/panicbacklog_logo.png" alt="Panic Backlog" class="mainlogo" />';
    var title = this.container.getElementsByTagName('h1')[0];
    var lang = new LangController();
    lang.start(this.container);

    var firstPageStart = ViewUtil.buildButton(
      LangUtil.get('firstPageStart'),
      this.controller.showChooseUserPage, this.controller
    );
    firstPageStart.className = 'firstPageStart';
    this.container.appendChild(firstPageStart);
    var firstPageHelp = ViewUtil.buildButton(
      LangUtil.get('firstPageHelp'),
      this.controller.showHelpPage, this.controller
    );
    firstPageHelp.className = 'btn';
    this.container.appendChild(firstPageHelp);
    var firstPageCredits = ViewUtil.buildButton(
      LangUtil.get('firstPageCredits'),
      this.controller.showCreditsPage, this.controller
    );
    firstPageCredits.className = 'btn';
    this.container.appendChild(firstPageCredits);
    var compatibilityPageTitle = ViewUtil.buildButton(
      LangUtil.get('compatibilityPageTitle'),
      this.controller.showCompatibilityPage, this.controller
    );
    compatibilityPageTitle.className = 'btn';
    this.container.appendChild(compatibilityPageTitle);
  };

  Page.prototype.showHelpPage = function() {
    this.container.className = 'page helpPage';
    this.container.innerHTML = [
      '<h1 class="title">', LangUtil.get('helpPageTitle'), '</h1>',
      '<div class="content"></div>', 
      '<footer class="footer">', '', '</footer>'
    ].join('');
    var footer = this.container.getElementsByTagName('footer')[0];
    var helpPageBack = ViewUtil.buildButton(
      LangUtil.get('helpPageBack'),
      this.controller.showFirstPage, this.controller
    );
    helpPageBack.className = 'btn';
    footer.appendChild(helpPageBack);
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
        'btn-img logo ' + team, 
        '', 
        function() {
          this.controller.onChooseTeam(team);
        }, 
        this
      ));
    }, this);

    var footer = this.container.getElementsByTagName('footer')[0];
    var chooseUserPageBack = ViewUtil.buildButton(
      LangUtil.get('chooseUserPageBack'),
      this.controller.showFirstPage, this.controller
    );
    chooseUserPageBack.className = 'btn';
    footer.appendChild(chooseUserPageBack);

  };

  Page.prototype.showGithubPage = function() {
    this.container.className = 'page githubPage';
    this.container.innerHTML = [
      '<h1 class="title">', LangUtil.get('githubPageTitle'), '</h1>',
      '<div class="content"></div>',
      '<footer class="footer"></footer>'
    ].join('');
    var footer = this.container.getElementsByTagName('footer')[0];
    var githubPageBack = ViewUtil.buildButton(
      LangUtil.get('githubPageBack'),
      this.controller.showChooseUserPage, this.controller
    );
    githubPageBack.className = 'btn';
    footer.appendChild(githubPageBack);


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

  function buildimgTool(imgName, urlLink) {
    return '<a href="'+urlLink+'" target="_blank"><img src="assets/img/tool/'+imgName+'.png" /></a>';
  }


  Page.prototype.showCreditsPage = function() {
    this.container.className = 'page creditsPage';
    this.container.innerHTML = [
      '<div class="generique"><h1 class="title">Panic Backlog</h1><p>Panic Backlog a été réalisé pour le concours GitHub Game Off II</p><h2>Réalisation</h2><p>Romain Maneschi<br />Audrey Novak<br />Laurent Dufour</p><h2>Techno</h2><p>HTML5<br />CSS3<br />JavaScript</p><h2>Langages</h2><p>HTML5<br />CSS3<br />JavaScript</p><h2>Outils</h2><p>Vanillas-js<br />Node Js<br />Npm<br />Grunt<br />Bower<br />Karma<br />Underscore<br /><br />',
      buildimgTool('vanillajs', 'http://vanilla-js.com/'),
      buildimgTool('nodejs', 'http://nodejs.org/'),
      buildimgTool('npm', 'https://npmjs.org/'),
      buildimgTool('grunt', 'http://gruntjs.com/'),
      buildimgTool('bower', 'http://bower.io/'),
      buildimgTool('karma', 'http://karma-runner.github.io/'),
      buildimgTool('underscore', 'http://underscorejs.org/'),
      '</p><h2>Remerciement</h2><p>Julien Lafont<br />Adeline Dibling<br />Vivian Pennel<br />GitHub</p></div><footer class="footer"></footer>'
    ].join('');
    var footer = this.container.getElementsByTagName('footer')[0];
    var creditsPageBack = ViewUtil.buildButton(
      LangUtil.get('creditsPageBack'),
      this.controller.showFirstPage, this.controller
    );
    creditsPageBack.className = 'btn';
    footer.appendChild(creditsPageBack);
  };
  /*
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
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('toolPageTitle'), 
      this.controller.showToolPage, this.controller
    ));
  };
  

  function buildTool(className, urlLink) {
    return '<a href="'+urlLink+'" class="'+className+'" target="_blank"></a>';
  }

  Page.prototype.showToolPage = function() {
    this.container.className = 'page toolPage';
    this.container.innerHTML = [
      '<h1 class="title">', LangUtil.get('toolPageTitle'), '</h1>',
      '<div class="content">', 
      LangUtil.get('toolPageSentence'),
      '<div class="tools">',
      buildTool('vanillajs', 'http://vanilla-js.com/'),
      buildTool('node', 'http://nodejs.org/'),
      buildTool('npm', 'https://npmjs.org/'),
      buildTool('grunt', 'http://gruntjs.com/'),
      buildTool('bower', 'http://bower.io/'),
      buildTool('karma', 'http://karma-runner.github.io/'),
      buildTool('underscore', 'http://underscorejs.org/'),
      '</div>',
      '</div>',
      '<footer class="footer">', '', '</footer>'
    ].join('');
    var footer = this.container.getElementsByTagName('footer')[0];
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('toolPageBack'), 
      this.controller.showFirstPage, this.controller
    ));
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('creditsPageTitle'), 
      this.controller.showCreditsPage, this.controller
    ));
  };
*/
  Page.prototype.showEndPage = function() {
    this.container.className = 'page endPage';
    this.container.innerHTML = [
      '<div class="allTitles">',
      '<h1 class="title">', LangUtil.get('endSentence1'), '</h1>',
      '<h1 class="title">', LangUtil.get('endSentence2'), '</h1>',
      '<h1 class="title">', LangUtil.get('endSentence3'), '</h1>',
      '<h1 class="title">', LangUtil.get('endSentence4'), '</h1>',
      '<h1 class="title">', LangUtil.get('endSentence5'), '</h1>',
      '</div>',
      '<footer class="footer">', '', '</footer>'
    ].join('');
    TimeoutUtil.timeout(function() {
      this.container.getElementsByClassName('allTitles')[0].style.top = '-330px';
    }, 1000, this);
    var footer = this.container.getElementsByTagName('footer')[0];
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('endReplayButton'), 
      this.controller.startGame, this.controller
    ));
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('endAgileButton'), 
      function() {
        window.open('http://agilemanifesto.org/iso/'+LangUtil.getCurrentLang());
      }
    ));
  };

  function buildCompatibility(name, isCompatible) {
    return ['<li class="compatibility ', isCompatible, '">',
      name,
      '</li>'].join('');
  }

  Page.prototype.showCompatibilityPage = function() {
    this.container.className = 'page compatibilityPage';
    var noCompatible = '';
    if(CompatibilityUtil.isCompatible() === false) {
      noCompatible = LangUtil.get('compatibilityPageNoCompatible');
    }
    this.container.innerHTML = [
      '<h1 class="title">', LangUtil.get('compatibilityPageTitle'), '</h1>',
      '<div class="content">', noCompatible, '<ul>',
      buildCompatibility('Drag & Drop', CompatibilityUtil.hasDragAndDrop()),
      buildCompatibility('Css transition', CompatibilityUtil.hasCssTransition()),
      buildCompatibility('Ajax request', CompatibilityUtil.hasAjaxRequest()),
      buildCompatibility('Local storage', CompatibilityUtil.hasLocalStorage()),
      '</ul></div><footer class="footer"></footer>'
    ].join('');

    var footer = this.container.getElementsByTagName('footer')[0];
    var compatibilityPageBack = ViewUtil.buildButton(
      LangUtil.get('compatibilityPageBack'),
      this.controller.showFirstPage, this.controller
    );
    compatibilityPageBack.className = 'btn';
    footer.appendChild(compatibilityPageBack);
  };

  Page.prototype.getContentPage = function() {
    return this.container.getElementsByClassName('content')[0];
  };

  return Page;

})();