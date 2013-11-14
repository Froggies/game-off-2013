var ColumnView = (function() {

	'use strict';

	function Column(controller) {
		Column.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('column inactive');
		var that = this;
		DragAndDropUtil.makeDroppable(this.container, function(elementDragged) {
			return controller.addCard(elementDragged.controller);
		});
	}

	ObjectUtil.inherit(Column, AbstractView);

	Column.prototype.refreshCanBeActivate = function() {
		if(this.controller.isActive === true && this.controller.canBeActivate === false) {
			this.container.className = 'column active';
		} else {
			this.container.className = 'column canBeActive ' + this.controller.canBeActivate;
		}
	};

	Column.prototype.activate = function() {
		this.container.className = 'column active';
	};

	Column.prototype.addDiv = function() {
    this.container.appendChild(ViewUtil.buildContainer('dev'));
  };

	return Column;

})();

