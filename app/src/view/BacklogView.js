var BacklogView = (function() {

	'use strict';

	function Backlog(controller) {
		Backlog.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('backlog');

		this.title = ViewUtil.buildContainer('title');
		this.title.innerHTML = LangUtil.get('backlog');
		this.container.appendChild(this.title);

		this.gauge = ViewUtil.buildContainer('gauge gaugebacklog');
		this.gaugePercentage = ViewUtil.buildContainer('');
		this.gauge.appendChild(this.gaugePercentage);
		this.container.appendChild(this.gauge);

		this.cardsContainer = ViewUtil.buildContainer('cards');
		this.container.appendChild(this.cardsContainer);
	}

	ObjectUtil.inherit(Backlog, AbstractView);

	Backlog.prototype.updateGauge = function() {
		var percent = (this.controller.cards.length * 100) / this.controller.game.nbCardsInBacklogMax;
		this.title.innerHTML = LangUtil.get('backlog') + ' : ' + this.controller.cards.length + '/' + this.controller.game.nbCardsInBacklogMax;
		ViewUtil.removeClassName(this.gaugePercentage, 'relax');
		ViewUtil.removeClassName(this.gaugePercentage, 'nervous');
		ViewUtil.removeClassName(this.gaugePercentage, 'dead');
		if(percent < 30) {
			ViewUtil.addClassName(this.gaugePercentage, 'relax');
		} else if(percent < 60) {
			ViewUtil.addClassName(this.gaugePercentage, 'nervous');
		} else {
			ViewUtil.addClassName(this.gaugePercentage, 'dead');
		}
		this.gaugePercentage.style.width = percent + '%';
	};

	return Backlog;

})();

