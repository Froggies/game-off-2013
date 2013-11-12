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
		var interval = TimeoutUtil.interval(function() {
			var element = card.view.container;
			var top= (window.getComputedStyle ?
				window.getComputedStyle(element, null).getPropertyValue('top') :
				element.currentStyle ? element.currentStyle.top : '0'
			);
			top = parseFloat(top.split('px')[0], 10);
			element.style.top = (top - 1.25) + 'px';
			if(top <= 0) {
				window.clearInterval(interval);
			}
		}, 50, this);
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

  Backlog.prototype.pause = function() {
  };

  Backlog.prototype.resume = function() {
  };

	return Backlog;

})();

