var CardView = (function() {

	'use strict';

	function Card(controller) {
		this.controller = controller;
		this.container = ViewUtil.buildContainer('card');
		this.typeContainer = ViewUtil.buildContainer('type');
		this.complexityContainer = ViewUtil.buildContainer('complexity');
		this.timeContainer = ViewUtil.buildContainer('time');
		this.ellapsedTimeContainer = ViewUtil.buildContainer('ellapsed');
		this.container.appendChild(this.typeContainer);
		this.container.appendChild(this.complexityContainer);
		this.timeContainer.appendChild(this.ellapsedTimeContainer);
		this.container.appendChild(this.timeContainer);
		DragAndDropUtil.makeDraggable(this);
	}

	Card.prototype.draw = function(element) {
		this.typeContainer.innerHTML = this.controller.type;
		var indexOfComplexity = _.find(Constants.CARD_COMPLEXITY, function(c) {
			return c === this.controller.complexity;
		}, this);
		var complexityView = '';
		for (var i = 0; i < indexOfComplexity; i++) {
			complexityView = complexityView + '*';
		}
		this.complexityContainer.innerHTML = complexityView;
		this.timeContainer.style.display = 'none';
		element.appendChild(this.container);
	};

	Card.prototype.refresh = function() {
		this.timeContainer.style.display = 'block';
		var percent = (this.controller.time * 100) / this.controller.initialTime;
		this.ellapsedTimeContainer.style.width = percent + '%';
	};

	return Card;

})();

