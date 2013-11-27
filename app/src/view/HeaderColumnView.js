var HeaderColumnView = (function() {

  'use strict';

  function HeaderColumn(controller, team) {
    HeaderColumn.parent.constructor.apply(this, arguments);
    this.team = team;
    this.index = this.controller.index;
    this.isArrayTeam = _.isArray(team);
    if(this.isArrayTeam) {
      this.classes = ['headerColumn', 'index' + this.index];
    } else {
      this.classes = ['headerColumn', team, 'index' + this.index];
    }
    this.container = ViewUtil.buildContainer(this.classes.join(' '));
    ClickUtil.listen(this.container, this.controller.activate, this.controller);
    if(this.isArrayTeam) {
      this.avatarContainer = ViewUtil.buildContainer('avatar');
      this.container.appendChild(this.avatarContainer);
    }
    this.message = ViewUtil.buildContainer('message');
    this.container.appendChild(this.message);
    this.nbRowActive = ViewUtil.buildContainer('number');
    this.container.appendChild(this.nbRowActive);
    if(this.index === 0) {
      this.activate();
    }
  }

  ObjectUtil.inherit(HeaderColumn, AbstractView);

  HeaderColumn.prototype.refreshCanBeActivate = function() {
    this.container.className = this.classes.join(' ') + ' canBeActive ' + this.controller.canBeActivate;
    if(this.controller.canBeActivate === true) {
      if(this.controller.isActive === false) {
        //this.message.innerHTML = LangUtil.get('columnRecruit');
        this.message.className = 'lvlup-add';
        this.message.innerHTML = '<img src="assets/img/lvlup-add.png" alt="' + LangUtil.get('columnRecruit') + '" />';
      } else {
        //this.message.innerHTML = LangUtil.get('columnUpgrade');
        this.message.className = 'lvlup-up';
        this.message.innerHTML = '<img src="assets/img/lvlup-up.png" alt="' + LangUtil.get('columnUpgrade') + '" />';
      }
      this.message.style.display = 'block';
    } else {
      this.message.style.display = 'none';
    }
    this.nbRowActive.className = 'number number'+this.controller.columnController.nbRowActive;
  };

  HeaderColumn.prototype.activate = function() {
    if(this.isArrayTeam) {
      var avatar = this.team[_.random(0, this.team.length-1)].avatar_url;
      this.avatarContainer.style.backgroundImage = 'url('+avatar+')';
    }
  };

  HeaderColumn.prototype.resign = function() {
    if(this.isArrayTeam) {
      this.container.style.backgroundImage = '';
    }
    var sentence = ViewUtil.buildContainer('bubble');
    var sentences = LangUtil.get('resignSentences');
    sentence.innerHTML = sentences[_.random(0, sentences.length-1)];
    this.container.appendChild(sentence);
    TimeoutUtil.timeout(function() {
      this.container.removeChild(sentence);
    }, 2500, this);
  };

  return HeaderColumn;

})();

