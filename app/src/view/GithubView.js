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

    hideAll(this.container);
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

    var githubButtonOk = ViewUtil.buildButton('Ok',function() {
        this.controller.newToken(this.inputToken.value, this.checkboxKeepIt.checked);
      }, this);
    githubButtonOk.className = 'btn-main';
    this.inputTokenContainer.appendChild(githubButtonOk);

    var githubPageHelp = ViewUtil.buildButton(LangUtil.get('githubPageHelp'),this.controller.showHelp, this.controller);
    githubPageHelp.className = 'btn';
    this.inputTokenContainer.appendChild(githubPageHelp);

    this.inputTokenContainer.appendChild(ViewUtil.buildElement('', 'br'));
    this.checkboxKeepIt = ViewUtil.buildElement('', 'input');
    this.checkboxKeepIt.type = 'checkbox';
    this.inputTokenContainer.appendChild(this.checkboxKeepIt);
    var sentence = ViewUtil.buildElement('githubPageRetainToken', 'span');
    sentence.innerHTML = LangUtil.get('githubPageRetainToken');
    this.inputTokenContainer.appendChild(sentence);
  };

  Github.prototype.displayInputToken = function() {
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

  return Github;

})();