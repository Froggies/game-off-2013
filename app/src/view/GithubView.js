var GithubView = (function() {

  'use strict';

  function Github(controller) {
    Github.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('github');

    if(this.controller.token === undefined) {
      this.displayInputToken();
    } else {
      this.displayLoader();
    }
  }

  ObjectUtil.inherit(Github, AbstractView);

  Github.prototype.displayInputToken = function() {
    this.container.innerHTML = '';
    this.inputToken = ViewUtil.buildElement('', 'input');
    this.inputToken.type = 'text';
    this.inputToken.placeholder = LangUtil.get('githubPageToken');
    this.container.appendChild(this.inputToken);

    var githubButtonOk = ViewUtil.buildButton('Ok',function() {
        this.controller.newToken(this.inputToken.value, this.checkboxKeepIt.checked);
        this.displayLoader();
      }, this);
    githubButtonOk.className = 'btn-main';
    this.container.appendChild(githubButtonOk);

    var githubPageHelp = ViewUtil.buildButton(LangUtil.get('githubPageHelp'),this.controller.showHelp, this.controller);
    githubPageHelp.className = 'btn';
    this.container.appendChild(githubPageHelp);

    this.container.appendChild(ViewUtil.buildElement('', 'br'));
    this.checkboxKeepIt = ViewUtil.buildElement('', 'input');
    this.checkboxKeepIt.type = 'checkbox';
    this.container.appendChild(this.checkboxKeepIt);
    var sentence = ViewUtil.buildElement('githubPageRetainToken', 'span');
    sentence.innerHTML = LangUtil.get('githubPageRetainToken');
    this.container.appendChild(sentence);
  };

  function buildUserButton(user, view) {
    var button = ViewUtil.buildButtonImg(
      '', user.login, function() {
        if(button.className === '') {
          button.className = 'selected';
          view.controller.addMember(user);
          view.refreshSelect();
        } else {
          button.className = '';
          view.controller.removeMember(user);
          view.refreshSelect();
        }
      }
    );
    button.style.backgroundImage = 'url('+user.avatar_url+')';
    return button;
  }

  Github.prototype.displayLoader = function() {
    this.container.innerHTML = '';
    this.container.appendChild(ViewUtil.buildContainer('loader'));
  };

  Github.prototype.displayError = function(error) {
    this.container.innerHTML = '';
    var errorDiv = ViewUtil.buildContainer('error');
    errorDiv.innerHTML = error;
    this.container.appendChild(errorDiv);
  };

  Github.prototype.refreshAvatars = function() {
    this.container.innerHTML = '';
    this.select = ViewUtil.buildContainer('sentence');
    this.container.appendChild(this.select);
    this.refreshSelect();
    this.container.appendChild(buildUserButton(this.controller.user, this));
    _.each(this.controller.friends, function(friend) {
      this.container.appendChild(buildUserButton(friend, this));
    }, this);
  };

  Github.prototype.refreshSelect = function() {
    this.select.innerHTML = 'Select ' + (Constants.NB_COLUMNS - this.controller.selectedTeam.length) + ' members';
  };

  return Github;

})();