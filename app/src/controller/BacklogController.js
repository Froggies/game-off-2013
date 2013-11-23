var BacklogController = (function() {

	'use strict';

	function Backlog(game) {
    this.game = game;
		this.view = new BacklogView(this);
		this.cards = [];
	}

	ObjectUtil.inherit(Backlog, AbstractController);

	Backlog.prototype.addCard = function(card) {
		this.cards.push(card);
		card.start(this.view.cardsContainer);
		this.view.updateGauge();
	};

	Backlog.prototype.removeCard = function(card) {
		var index = this.cards.indexOf(card);
		if (index > -1) {
			this.cards.splice(index, 1);
		}
		this.view.updateGauge();
	};

  Backlog.prototype.removeAllCards = function() {
    _.each(this.cards, function(card) {
      this.view.cardsContainer.removeChild(card.view.container);
    }, this);
    this.cards = [];
    this.view.updateGauge();
  };

	return Backlog;

})();

