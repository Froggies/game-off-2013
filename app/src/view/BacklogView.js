var BacklogView = (function() {

	'use strict';

	function Backlog(controller) {
		this.controller = controller;
		this.container = buildContainer();
	}

	Backlog.prototype.draw = function(element) {
		element.appendChild(this.container);
	};

	function buildContainer() {
		var div = document.createElement('div');
		div.className = 'backlog';
		return div;
	}

	return Backlog;

})();

