var BacklogView = (function() {

	'use strict';

	function Backlog(controller) {
		this.controller = controller;
		this.container = UtilView.buildContainer('backlog');
	}

	Backlog.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	return Backlog;

})();

