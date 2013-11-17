var GithubView = (function() {

  'use strict';

  function Github(controller) {
    Github.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('github');

    this.container.innerHTML = LangUtil.get('githubPageToken');
    this.inputToken = ViewUtil.buildElement('', 'input');
    this.inputToken.type = 'text';
    this.container.appendChild(this.inputToken);
    this.container.appendChild(ViewUtil.buildButton('Ok', function() {
      this.controller.newToken(this.inputToken.value);
    }, this));
  }

  ObjectUtil.inherit(Github, AbstractView);

  return Github;

})();