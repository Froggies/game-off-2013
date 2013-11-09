var HeaderColumnView = (function() {

	'use strict';

	function HeaderColumn(controller) {
		this.controller = controller;
		this.container = ViewUtil.buildContainer('headerColumn');
		ClickUtil.listen(this.container, function() {
			this.onClick();
		}, this);
	}

	HeaderColumn.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	HeaderColumn.prototype.refreshCanBeActivate = function() {
		this.container.className = 'headerColumn canBeActive ' + this.controller.canBeActivate;
	};

	HeaderColumn.prototype.onClick = function() {
		this.controller.activate();
	};

	return HeaderColumn;

})();

