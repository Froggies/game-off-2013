var HeaderColumnView = (function() {

  'use strict';

  function HeaderColumn(controller, team) {
    HeaderColumn.parent.constructor.apply(this, arguments);
    this.team = team;
    this.index = this.controller.index;
    this.isArrayTeam = _.isArray(team);
    if(this.isArrayTeam) {
      this.classes = ['headerColumn', 'classic', 'index' + this.index];
    } else {
      this.classes = ['headerColumn', team, 'index' + this.index];
    }
    this.container = ViewUtil.buildContainer(this.classes.join(' '));
    if(this.index === 0) {
      this.activate();
    }
    ClickUtil.listen(this.container, this.controller.activate, this.controller);
    this.message = ViewUtil.buildContainer('message');
    this.container.appendChild(this.message);
  }

  ObjectUtil.inherit(HeaderColumn, AbstractView);

  HeaderColumn.prototype.refreshCanBeActivate = function() {
    this.container.className = this.classes.join(' ') + ' canBeActive ' + this.controller.canBeActivate;
    if(this.controller.canBeActivate === true) {
      if(this.controller.isActive === false) {
        this.message.innerHTML = LangUtil.get('columnRecruit');
      } else {
        this.message.innerHTML = LangUtil.get('columnUpgrade');
      }
      this.message.style.display = 'block';
    } else {
      this.message.style.display = 'none';
    }
  };

  HeaderColumn.prototype.activate = function() {
    if(this.isArrayTeam) {
      this.container.style.backgroundImage = 'url('+this.team[this.index].avatar_url+')';
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

