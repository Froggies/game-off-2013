var GithubController = (function() {

  'use strict';

  function Github() {
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

  Github.prototype.newToken = function(token) {
    localStorage['githubToken'] = token;
    this.getUserInfos(token);
  };

  Github.prototype.getUserInfos = function(token) {
    var url = 'https://api.github.com/user?access_token='+token;
    GithubUtil.call(url, 
      function(data) {
        this.user = JSON.parse(data);
        console.log(this.user);
        this.getFollowings(this.user.following_url, this.user.followers_url, token);
      }, 
      function(error) {
        console.log(error);
      }, 
      this
    );
  };

  Github.prototype.getFollowings = function(u, u2, token) {
    var url = u.split('{')[0] + '?access_token='+token;
    GithubUtil.call(url, 
      function(data) {
        this.friends = JSON.parse(data);
        this.getFolloweds(u2, token);
      }, 
      function(error) {
        console.log(error);
      }, 
      this
    );
  };

  Github.prototype.getFolloweds = function(u, token) {
    var url = u.split('{')[0] + '?access_token='+token;
    GithubUtil.call(url, 
      function(data) {
        this.friends = _.union(this.friends, JSON.parse(data));
        this.view.refreshAvatars();
      }, 
      function(error) {
        console.log(error);
      }, 
      this
    );
  };

  Github.prototype.addMember = function(member) {
    this.selectedTeam.push(member);
  };

  Github.prototype.removeMember = function(member) {
    this.selectedTeam = _.without(this.selectedTeam, member);
  };

  return Github;

})();