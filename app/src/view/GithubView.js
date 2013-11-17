var GithubView = (function() {

  'use strict';

  function Github(controller) {
    Github.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('github');

    if(this.controller.token === undefined) {
      this.inputToken = ViewUtil.buildElement('', 'input');
      this.inputToken.type = 'text';
      this.inputToken.placeholder = LangUtil.get('githubPageToken');
      this.container.appendChild(this.inputToken);
      this.container.appendChild(ViewUtil.buildButton('Ok', function() {
        this.controller.newToken(this.inputToken.value);
      }, this));
    } else {
      //TODO spinner
    }
  }

  ObjectUtil.inherit(Github, AbstractView);

  function buildUserButton(user) {
    var button = ViewUtil.buildButtonImg(
      '', user.login, function() {}
    );
    button.style.backgroundImage = 'url('+user.avatar_url+')';
    return button;
  }

  Github.prototype.refreshAvatars = function() {
    this.container.appendChild(buildUserButton(this.controller.user));
    _.each(this.controller.friends, function(friend) {
      console.log(friend);
      this.container.appendChild(buildUserButton(friend));
    }, this);
  };

  return Github;

})();