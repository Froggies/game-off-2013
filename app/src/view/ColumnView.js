var ColumnView = (function() {

	'use strict';

	function Column(controller) {
		this.controller = controller;
		this.container = ViewUtil.buildContainer('column inactive');
		var that = this;
		DragAndDropUtil.makeDroppable(this.container, function(elementDragged) {
			return controller.addCard(elementDragged.controller);
		});
	}

	Column.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	Column.prototype.activate = function() {
		this.container.className = 'column active';
	};

	return Column;

})();
