var CardController = (function() {

  'use strict';

  function Card(type, complexity, time) {
    this.type = type;
    this.complexity = complexity;
    this.time = time;
    this.view = new CardView(this);
  }

  ObjectUtil.inherit(Card, AbstractController);

  Card.prototype.startTime = function() {
    this.view.startTime();
  };

  return Card;

})();

