var PageView = (function() {

  'use strict';

  function Page(controller) {
    Page.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('page');
  }

  ObjectUtil.inherit(Page, AbstractView);

  Page.prototype.showFirstPage = function() {
    this.container.className = 'page firstPage';
    this.container.innerHTML = '<img src="assets/img/panicbacklog_logo.png" alt="Panic Backlog" class="mainlogo" />';
    
    var lang = new LangController();
    lang.start(this.container);

    var firstPageStart = ViewUtil.buildMainButton(
      LangUtil.get('firstPageStart'), 'firstPageStart',
      this.controller.showChooseUserPage, this.controller
    );
    this.container.appendChild(firstPageStart);
    var firstPageHelp = ViewUtil.buildButton(
      LangUtil.get('firstPageHelp'), '',
      this.controller.showHelpPage, this.controller
    );
    this.container.appendChild(firstPageHelp);
    var firstPageCredits = ViewUtil.buildButton(
      LangUtil.get('firstPageCredits'), '',
      this.controller.showCreditsPage, this.controller
    );
    this.container.appendChild(firstPageCredits);
    var compatibilityButtonTitle = [
      LangUtil.get('compatibilityPageTitle'), ' ',
      CompatibilityUtil.nbItemCompatible(), '/', CompatibilityUtil.nbItem()
    ].join('');
    var compatibilityPageTitle = ViewUtil.buildButton(
      compatibilityButtonTitle, '',
      this.controller.showCompatibilityPage, this.controller
    );
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
      LangUtil.get('helpPageBack'), '',
      this.controller.showFirstPage, this.controller
    );
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

      var selectteam = ViewUtil.buildContainer('selectteam');

      var selectteamtitle = ViewUtil.buildContainer('selectteam-title');
      selectteamtitle.innerHTML=team;

      selectteam.appendChild(ViewUtil.buildContainer('selectteam-'+team));
      selectteam.appendChild(selectteamtitle);

      content.appendChild(selectteam);

      ClickUtil.listen(selectteam, function() {
          this.controller.onChooseTeam(team);
        }, this);
    }, this);

    var footer = this.container.getElementsByTagName('footer')[0];
    var chooseUserPageBack = ViewUtil.buildButton(
      LangUtil.get('chooseUserPageBack'), '',
      this.controller.showFirstPage, this.controller
    );
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
      LangUtil.get('githubPageBack'), '',
      this.controller.showChooseUserPage, this.controller
    );
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

  function buildGoButton(elem, langKey, topPx) {
    return ViewUtil.buildButton(
      LangUtil.get(langKey), '',
      function() {
        elem.style.top = topPx;
      }
    );
  }

  Page.prototype.showCreditsPage = function() {
    this.container.className = 'page creditsPage';
    this.container.innerHTML = [
      '<div class="generique">',
      '<h1 class="title">Panic Backlog</h1>',
      '<p>', LangUtil.get('creditsPageSentence'), '</p>',
      '<h2>', LangUtil.get('creditsPageAchievement'), '</h2>',
      '<p>Romain Maneschi<br />Audrey Novak<br />Laurent Dufour</p>',
      '<h2>', LangUtil.get('creditsPageTechno'), '</h2>',
      '<p>HTML5<br />CSS3<br />JavaScript</p>',
      '<h2>', LangUtil.get('creditsPageArt'), '</h2>',
      '<p>Songs/FX : <a href="http://www.freesound.org/" target="_blank">freesound.org</a><br />Font : <a href="http://www.fontsquirrel.com/fonts/Komika-Axis" target="_blank">Komika-Axis</a><br />Images : Laurent Dufour with <3 </p>',
      '<h2>', LangUtil.get('creditsPageTool'), '</h2>',
      '<p>Vanillas-js<br />Node Js<br />Npm<br />Grunt<br />Bower<br />Karma<br />Underscore<br /><br />',
      buildimgTool('vanillajs', 'http://vanilla-js.com/'),
      buildimgTool('nodejs', 'http://nodejs.org/'),
      buildimgTool('npm', 'https://npmjs.org/'),
      buildimgTool('grunt', 'http://gruntjs.com/'),
      buildimgTool('bower', 'http://bower.io/'),
      buildimgTool('karma', 'http://karma-runner.github.io/'),
      buildimgTool('underscore', 'http://underscorejs.org/'),
      '</p>',
      '<h2>', LangUtil.get('creditsPageOnlineTool'), '</h2>',
      '<p>Github<br />Trello<br />Travis-ci<br />David-dm<br />Media.io<br /><br />',
      buildimgTool('github', 'http://github.com/'),
      buildimgTool('trello', 'http://trello.com/'),
      buildimgTool('travis-ci', 'https://travis-ci.org'),
      buildimgTool('david-dm', 'https://david-dm.org'),
      buildimgTool('media', 'https://media.io'),
      '<h2>', LangUtil.get('creditsPageThx'), '</h2>',
      '<p>Julien Lafont<br />Adeline Dibling<br />Vivian Pennel<br />GitHub</p><br /><br />',
      '<div class="froggies">',
      buildMember('audrey', LangUtil.get('creditsPageAudreySentence'), 'https://github.com/audreyn', '', '', 'https://twitter.com/udr3y', '', ''),
      buildMember('laurent', LangUtil.get('creditsPageLaurentSentence'), 'https://github.com/undless', 'https://www.facebook.com/laurent.dufour.3152', 'https://plus.google.com/u/0/107033330099598983714/posts?tab=XX', 'https://twitter.com/_LaurentDufour', 'http://fr.linkedin.com/pub/laurent-dufour/33/49/30', 'http://fr.viadeo.com/fr/profile/laurent.dufour1492'),
      buildMember('romain', LangUtil.get('creditsPageRomainSentence'), 'https://github.com/manland', 'https://www.facebook.com/romain.maneschi', 'https://plus.google.com/+RomainManeschi', 'https://twitter.com/RmManeschi', 'http://fr.linkedin.com/pub/romain-maneschi/5b/422/aa9', 'http://fr.viadeo.com/fr/profile/romain.maneschi%E2%80%8E'),
      '</div>',
      '</div>',
      '<footer class="footer"></footer>'
    ].join('');
    var footer = this.container.getElementsByTagName('footer')[0];
    var generique = this.container.getElementsByClassName('generique')[0];
    TimeoutUtil.timeout(function() {
      footer.appendChild(buildGoButton(generique, 'creditsPageAchievement', '-350px'));
      footer.appendChild(buildGoButton(generique, 'creditsPageTechno', '-500px'));
      footer.appendChild(buildGoButton(generique, 'creditsPageArt', '-650px'));
      footer.appendChild(buildGoButton(generique, 'creditsPageTool', '-810px'));
      footer.appendChild(buildGoButton(generique, 'creditsPageOnlineTool', '-1250px'));
      footer.appendChild(buildGoButton(generique, 'creditsPageThx', '-1590px'));
    }, 30000, this);
    var btn = ViewUtil.buildButton(
      LangUtil.get('creditsPageBack'), '',
      this.controller.showFirstPage, this.controller
    );
    footer.appendChild(btn);
  };

  Page.prototype.showEndPage = function() {
    this.container.className = 'page endPage';
    this.container.innerHTML = [
      '<img src="assets/img/panicbacklog_logo.png" alt="Panic Backlog" class="mainlogo" />',
      '<h1 class="title">', LangUtil.get('endTitle'), '</h1>',
      '<div class="content">', LangUtil.get('endContent'), '</div>'
    ].join('');
    var content = this.container.getElementsByClassName('content')[0];
    var endAgileButton = ViewUtil.buildMainButton(
      LangUtil.get('endAgileButton'), '',
      function() {
        if(LangUtil.getCurrentLang() === 'fr') {
          window.open('http://fr.wikipedia.org/wiki/M%C3%A9thode_agile');
        } else {
          window.open('http://en.wikipedia.org/wiki/Agile_software_development');
        }
      }
    );
    content.appendChild(endAgileButton);

    var endReplayButton = ViewUtil.buildButton(
      LangUtil.get('endReplayButton'), '',
      function() {
        this.controller.startGame(this.controller.team);
      }, 
      this
    );
    content.appendChild(endReplayButton);

    var endBack = ViewUtil.buildButton(
      LangUtil.get('endBack'), '',
      this.controller.showFirstPage, this.controller
    );
    content.appendChild(endBack);

  };


  function buildCompatibility(name, isCompatible, description) {
    return ['<li class="compatibility ', isCompatible, '">',
      name,
      '<span class="description">', description, '</span>',
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
      buildCompatibility('Drag & Drop', CompatibilityUtil.hasDragAndDrop(), LangUtil.get('compatibilityDdDescription')),
      buildCompatibility('Css transition', CompatibilityUtil.hasCssTransition(), LangUtil.get('compatibilityCssTransitionDescription')),
      buildCompatibility('Ajax request', CompatibilityUtil.hasAjaxRequest(), LangUtil.get('compatibilityAjaxDescription')),
      buildCompatibility('Local storage', CompatibilityUtil.hasLocalStorage(), LangUtil.get('compatibilityLocalStorageDescription')),
      buildCompatibility('Audio mp3', CompatibilityUtil.hasAudioMp3(), LangUtil.get('compatibilityMp3Description')),
      buildCompatibility('Audio wav', CompatibilityUtil.hasAudioWav(), LangUtil.get('compatibilityWavDescription')),
      buildCompatibility('Audio ogg', CompatibilityUtil.hasAudioOgg(), LangUtil.get('compatibilityOggDescription')),
      '</ul></div><footer class="footer"></footer>'
    ].join('');

    var footer = this.container.getElementsByTagName('footer')[0];
    var buttonText = LangUtil.get('compatibilityPageBack');
    if(CompatibilityUtil.isCompatible() === false) {
      buttonText = LangUtil.get('compatibilityPageTryBack');
    }
    var compatibilityPageBack = ViewUtil.buildButton(
      buttonText, '',
      this.controller.showFirstPage, this.controller
    );
    footer.appendChild(compatibilityPageBack);
  };

  Page.prototype.getContentPage = function() {
    return this.container.getElementsByClassName('content')[0];
  };

  return Page;

})();