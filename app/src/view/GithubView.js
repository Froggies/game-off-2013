var GithubView = (function() {

  'use strict';

  function Github(controller) {
    Github.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('github');

    this.errorDiv = ViewUtil.buildContainer('error');
    this.container.appendChild(this.errorDiv);

    this.loaderContainer = ViewUtil.buildContainer('loader');
    this.container.appendChild(this.loaderContainer);

    this.inputTokenContainer = ViewUtil.buildContainer('inputToken');
    this.buildInputToken();
    this.container.appendChild(this.inputTokenContainer);

    this.helpContainer = ViewUtil.buildContainer('helpContainer');
    this.buildHelp();
    this.container.appendChild(this.helpContainer);
  }

  ObjectUtil.inherit(Github, AbstractView);

  var hideAll = function hideAll(container) {
    _.each(container.children, function(element) {
      element.style.display = 'none';
    });
  };

  Github.prototype.buildInputToken = function() {
    this.inputToken = ViewUtil.buildElement('', 'input');
    this.inputToken.type = 'text';
    this.inputToken.placeholder = LangUtil.get('githubPageToken');
    this.inputTokenContainer.appendChild(this.inputToken);

    this.inputTokenContainer.appendChild(
      ViewUtil.buildMainButton(
        'Ok', 
        '', 
        function() {
          this.controller.newToken(this.inputToken.value, this.checkboxKeepIt.checked);
        }, 
        this
      )
    );

    this.inputTokenContainer.appendChild(
      ViewUtil.buildButton(
        LangUtil.get('githubPageHelp'), 
        '', 
        this.controller.showHelp, 
        this.controller
      )
    );

    this.inputTokenContainer.appendChild(ViewUtil.buildElement('', 'br'));
    this.checkboxKeepIt = ViewUtil.buildElement('', 'input');
    this.checkboxKeepIt.type = 'checkbox';
    this.inputTokenContainer.appendChild(this.checkboxKeepIt);
    var sentence = ViewUtil.buildElement('githubPageRetainToken', 'span');
    sentence.innerHTML = LangUtil.get('githubPageRetainToken');
    this.inputTokenContainer.appendChild(sentence);
  };

  Github.prototype.displayInputToken = function() {
    hideAll(this.container);
    this.inputTokenContainer.style.display = 'block';
  };

  Github.prototype.displayLoader = function() {
    this.loaderContainer.style.display = 'block';
  };

  Github.prototype.displayError = function(error) {
    this.loaderContainer.style.display = 'none';
    this.inputTokenContainer.style.display = 'block';
    this.errorDiv.style.display = 'block';
    this.errorDiv.innerHTML = error;
  };

  Github.prototype.buildHelp = function() {
    var helpConfig = [
      {img: 'assets/img/help/github/1.png', sentenceKey: 'helpGithub1'},
      {img: 'assets/img/help/github/2.png', sentenceKey: 'helpGithub2'},
      {img: 'assets/img/help/github/3.png', sentenceKey: 'helpGithub3'},
      {img: 'assets/img/help/github/4.png', sentenceKey: 'helpGithub4'},
      {img: 'assets/img/help/github/5.png', sentenceKey: 'helpGithub5'}
    ];
    this.helpContainer.innerHTML = '';
    this.helpController = new HelpController(helpConfig);
    this.helpController.start(this.helpContainer);

    this.helpContainer.appendChild(
      ViewUtil.buildButton(
        LangUtil.get('githubPageNoAccount'),
        '',
        this.controller.pageController.showChooseUserPage, 
        this.controller.pageController
      )
    );
    this.helpContainer.appendChild(
      ViewUtil.buildButton(
        LangUtil.get('githubPageHaveToken'),
        '',
        this.displayInputToken, 
        this
      )
    );
  };

  Github.prototype.showHelp = function() {
    hideAll(this.container);
    this.helpContainer.style.display = 'block';
  };

  return Github;

})();