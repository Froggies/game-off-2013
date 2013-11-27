var HeaderColumnView = (function() {

  'use strict';

  function HeaderColumn(controller, team) {
    HeaderColumn.parent.constructor.apply(this, arguments);
    this.team = team;
    this.isArrayTeam = _.isArray(team);
    this.container = ViewUtil.buildContainer('headerColumn');
    ClickUtil.listen(this.container, this.controller.internalActivate, this.controller);
    
    if(this.isArrayTeam === false) {
      ViewUtil.addClassName(this.container, team);
    } else {
      this.avatarContainer = ViewUtil.buildContainer('avatar');
      this.container.appendChild(this.avatarContainer);
      this.avatar = this.team[_.random(0, this.team.length-1)].avatar_url;
      this.decorationContainer = ViewUtil.buildContainer('decoration');
      this.container.appendChild(this.decorationContainer);
    }
    
    this.message = ViewUtil.buildContainer('message');
    this.container.appendChild(this.message);
    this.nbRowActive = ViewUtil.buildContainer('number');
    this.container.appendChild(this.nbRowActive);
  }

  ObjectUtil.inherit(HeaderColumn, AbstractView);

  HeaderColumn.prototype.refreshCanBeActivate = function() {
    if(this.controller.canBeActivate === true) {
      ViewUtil.addClassName(this.container, 'canBeActive');
      if(this.controller.isActive === false) {
        this.message.className = 'lvlup-add';
        this.message.innerHTML = '<img src="assets/img/lvlup-add.png" alt="' + LangUtil.get('columnRecruit') + '" />';
      } else {
        this.message.className = 'lvlup-up';
        this.message.innerHTML = '<img src="assets/img/lvlup-up.png" alt="' + LangUtil.get('columnUpgrade') + '" />';
      }
      this.message.style.display = 'block';
    } else {
      ViewUtil.removeClassName(this.container, 'canBeActive');
      this.message.style.display = 'none';
    }
    this.nbRowActive.className = 'number number'+this.controller.columnController.nbRowActive;
  };

  HeaderColumn.prototype.activate = function() {
    if(this.isArrayTeam === true) {
      this.avatarContainer.style.backgroundImage = 'url('+this.avatar+')';
    }
  };

  HeaderColumn.prototype.resign = function() {
    var sentence = ViewUtil.buildContainer('bubble');
    var sentences = LangUtil.get('resignSentences');
    sentence.innerHTML = sentences[_.random(0, sentences.length-1)];
    this.container.appendChild(sentence);
    this.avatar = this.team[_.random(0, this.team.length-1)].avatar_url;
    TimeoutUtil.timeout(function() {
      if(this.isArrayTeam) {
        this.avatarContainer.style.backgroundImage = '';
      }
      this.container.removeChild(sentence);
      this.refreshCanBeActivate();
    }, 2500, this);
  };

  return HeaderColumn;

})();

