var HeaderColumnController = (function() {

	'use strict';

	function HeaderColumn(columnController) {
		this.isActive = false;
		this.canBeActivate = false;
		this.columnController = columnController;
		this.view = new HeaderColumnView(this);
	}

	HeaderColumn.prototype.start = function(element) {
		this.view.draw(element);
	};

	HeaderColumn.prototype.setCanBeActivate = function(bool) {
		this.canBeActivate = bool;
		this.view.refreshCanBeActivate();
	};

	HeaderColumn.prototype.activate = function() {
		if(this.canBeActivate === true) {
			this.isActive = true;
			this.columnController.activate();
		}
	};

	return HeaderColumn;

})();