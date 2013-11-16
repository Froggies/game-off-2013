var HeaderController = (function() {

	'use strict';

	function Header(game) {
		this.game = game;
		this.view = new HeaderView(this);
		this.score = new ScoreController();
		this.user = new UserController(game);
		this.bonus = new BonusController(game);
	}

	ObjectUtil.inherit(Header, AbstractController);

	Header.prototype.start = function(element) {
		this.view.draw(element);
		this.user.start(this.view.container);
		this.score.start(this.view.container);
		this.bonus.start(this.view.container);
	};

	return Header;

})();

