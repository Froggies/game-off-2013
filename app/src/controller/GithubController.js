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
    } else {
      this.view.displayInputToken();
    }
  }

  ObjectUtil.inherit(Github, AbstractController);

  Github.prototype.showHelp = function() {
    this.view.showHelp();
  };

  Github.prototype.newToken = function(token, keepIt) {
    if(keepIt === true) {
      localStorage['githubToken'] = token;
    }
    this.getUserInfos(token);
  };

  Github.prototype.getUserInfos = function(token) {
    this.view.displayLoader();
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
        this.pageController.startGame(this.friends);
      }, 
      function(error) {
        localStorage.removeItem('githubToken');
        this.view.displayError(error);
      }, 
      this
    );
  };

  return Github;

})();