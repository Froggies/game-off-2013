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
        this.displayLoader();
      }, this));
    } else {
      this.displayLoader();
    }
  }

  ObjectUtil.inherit(Github, AbstractView);

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