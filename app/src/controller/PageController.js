var PageController = (function() {

	'use strict';

	function Page(game, globalContainer) {
		this.game = game;
		this.globalContainer = globalContainer;
		this.view = new PageView(this);
	}

	ObjectUtil.inherit(Page, AbstractController);

	Page.prototype.showFirstPage = function() {
		this.view.showFirstPage();
	};

	Page.prototype.showHelpPage = function() {
		this.view.showHelpPage();
	};

	Page.prototype.showChooseUserPage = function() {
		this.view.showChooseUserPage();
	};

	Page.prototype.startGame = function() {
		this.globalContainer.innerHTML = '';
		this.game.start(this.globalContainer);
	};

	return Page;

})();