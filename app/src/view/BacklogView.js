var BacklogView = (function() {

	'use strict';

	function Backlog(controller) {
		Backlog.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('backlog');

		this.title = ViewUtil.buildContainer('title');
		this.title.innerHTML = 'Backlog';
		this.container.appendChild(this.title);

		this.gaugeContainer = ViewUtil.buildContainer('gaugeContainer');
		this.gauge = ViewUtil.buildContainer('gauge');
		this.gaugeContainer.appendChild(this.gauge);
		this.container.appendChild(this.gaugeContainer);

		this.cardsContainer = ViewUtil.buildContainer('cards');
		this.container.appendChild(this.cardsContainer);
	}

	ObjectUtil.inherit(Backlog, AbstractView);

	Backlog.prototype.updateGauge = function() {
		var percent = (this.controller.cards.length * 100) / Constants.NB_CARDS_IN_BACKLOG_MAX;
		ViewUtil.removeClassName(this.gauge, 'relax');
		ViewUtil.removeClassName(this.gauge, 'nervous');
		ViewUtil.removeClassName(this.gauge, 'dead');
		if(percent < 30) {
			ViewUtil.addClassName(this.gauge, 'relax');
		} else if(percent < 60) {
			ViewUtil.addClassName(this.gauge, 'nervous');
		} else {
			ViewUtil.addClassName(this.gauge, 'dead');
		}
		this.gauge.style.width = percent + '%';
	};

	return Backlog;

})();

