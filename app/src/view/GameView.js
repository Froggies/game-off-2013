var GameView = (function() {

  'use strict';

  function Game(controller) {
    Game.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('game');
    this.containerColumns = ViewUtil.buildContainer('columns');
  }

  ObjectUtil.inherit(Game, AbstractView);

  Game.prototype.drawColumnsContainer = function() {
    this.container.appendChild(this.containerColumns);
  };

  Game.prototype.getColumnsContainer = function() {
    return this.containerColumns;
  };

  Game.prototype.showNewSprint = function() {
    var sprint = ViewUtil.buildContainer('sprint');

    var title = ViewUtil.buildContainer('title');
    title.innerHTML = LangUtil.get('sprint') + ' ' + this.controller.nbSprint;
    sprint.appendChild(title);
    
    var sentence = ViewUtil.buildContainer('sentence');
    var potentielSentence = LangUtil.get('sprint' + this.controller.nbSprint);
    sentence.innerHTML = potentielSentence === undefined ? '' : potentielSentence;
    sprint.appendChild(sentence);

    this.container.appendChild(sprint);

    var timeout = TimeoutUtil.timeout(function() {
      window.clearTimeout(timeout);
      timeout = null;
      this.controller.resume();
    }, 5000, this);
  };

  return Game;

})();

