var GithubController = (function() {

  'use strict';

  function Github() {
    this.view = new GithubView(this);
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
        var user = JSON.parse(data);
        console.log(user);
        this.getFollowings(user.following_url, token);
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
        console.log(data);
      }, 
      function(error) {
        console.log(error);
      }, 
      this
    );
  };

  return Github;

})();