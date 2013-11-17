var GithubController = (function() {

  'use strict';

  function Github() {
    this.token = localStorage['githubToken'];
    this.user = undefined;
    this.friends = [];
    this.view = new GithubView(this);
    if(this.token !== undefined) {
      this.getUserInfos(this.token);
    }
  }

  ObjectUtil.inherit(Github, AbstractController);

  Github.prototype.newToken = function(token) {
    localStorage['githubToken'] = token;
    this.getUserInfos(token);
  };

  Github.prototype.getUserInfos = function(token) {
    var url = 'https://api.github.com/user?access_token='+token;
    GithubUtil.call(url, 
      function(data) {
        this.user = JSON.parse(data);
        this.view.refreshAvatars();
        console.log(this.user);
        this.getFollowings(this.user.following_url, token);
      }, 
      function(error) {
        console.log(error);
      }, 
      this
    );
  };

  Github.prototype.getFollowings = function(u, token) {
    var url = u.split('{')[0] + '?access_token='+token;
    console.log(url);
    GithubUtil.call(url, 
      function(data) {
        this.friends = JSON.parse(data);
        this.view.refreshAvatars();
        console.log(this.friends);
      }, 
      function(error) {
        console.log(error);
      }, 
      this
    );
  };

  return Github;

})();