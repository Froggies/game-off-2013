var GithubController = (function() {

  'use strict';

  function Github(pageController) {
    this.pageController = pageController;
    this.token = localStorage['githubToken'];
    this.user = undefined;
    this.friends = [];
    this.selectedTeam = [];
    this.view = new GithubView(this);
    if(this.token !== undefined) {
      this.getUserInfos(this.token);
    }
  }

  ObjectUtil.inherit(Github, AbstractController);

  Github.prototype.showHelp = function() {
    var helpConfig = [
      {img: 'assets/img/help/github/1.png', sentenceKey: 'helpGithub1'},
      {img: 'assets/img/help/github/2.png', sentenceKey: 'helpGithub2'},
      {img: 'assets/img/help/github/3.png', sentenceKey: 'helpGithub3'},
      {img: 'assets/img/help/github/4.png', sentenceKey: 'helpGithub4'},
      {img: 'assets/img/help/github/5.png', sentenceKey: 'helpGithub5'}
    ];
    this.view.container.innerHTML = '';
    this.helpController = new HelpController(helpConfig);
    this.helpController.start(this.view.container);

    var githubPageNoAccount = ViewUtil.buildButton(LangUtil.get('githubPageNoAccount'),this.pageController.showChooseUserPage, this.pageController);
    githubPageNoAccount.className = 'btn';
    this.view.container.appendChild(githubPageNoAccount);
    var githubPageHaveToken = ViewUtil.buildButton(LangUtil.get('githubPageHaveToken'),this.view.displayInputToken, this.view);
    githubPageHaveToken.className = 'btn';
    this.view.container.appendChild(githubPageHaveToken);
  };

  Github.prototype.newToken = function(token, keepIt) {
    if(keepIt === true) {
      localStorage['githubToken'] = token;
    }
    this.getUserInfos(token);
  };

  Github.prototype.getUserInfos = function(token) {
    var url = 'https://api.github.com/user?access_token='+token;
    GithubUtil.call(url, 
      function(data) {
        this.user = JSON.parse(data);
        this.getFollowings(this.user.following_url, this.user.followers_url, token);
      }, 
      function(error) {
        localStorage.removeItem('githubToken');
        this.view.displayError(error);
      }, 
      this
    );
  };

  Github.prototype.getFollowings = function(u, u2, token) {
    var url = u.split('{')[0] + '?access_token='+token;
    GithubUtil.call(url, 
      function(data) {
        this.friends = JSON.parse(data);
        this.getFollowers(u2, token);
      }, 
      function(error) {
        localStorage.removeItem('githubToken');
        this.view.displayError(error);
      }, 
      this
    );
  };

  Github.prototype.getFollowers = function(u, token) {
    var url = u.split('{')[0] + '?access_token='+token;
    GithubUtil.call(url, 
      function(data) {
        var allNewFriends = [];
        _.each(this.friends, function(friend) {
          var index = _.find(JSON.parse(data), function(newFriend) {
            return newFriend.login === friend.login;
          }, this);
          if(index < 0) {
            allNewFriends.push(newFriend);
          }
        }, this);
        this.friends = _.union(this.friends, allNewFriends);
        this.view.refreshAvatars();
      }, 
      function(error) {
        localStorage.removeItem('githubToken');
        this.view.displayError(error);
      }, 
      this
    );
  };

  Github.prototype.addMember = function(member) {
    this.selectedTeam.push(member);
    if(this.selectedTeam.length === Constants.NB_COLUMNS || 
      this.selectedTeam.length === this.friends.length) {
      this.pageController.startGame(this.friends);
    }
  };

  Github.prototype.removeMember = function(member) {
    this.selectedTeam = _.without(this.selectedTeam, member);
  };

  return Github;

})();