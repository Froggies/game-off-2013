var HeaderView = (function() {

	'use strict';

	function Header(controller) {
		Header.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('header');
		this.pauseButton = ViewUtil.buildButton('||');
		this.pauseButton.className = 'btn-main buttonPause';
		ClickUtil.listen(this.pauseButton, function() {
			this.controller.game.pause();
			this.controller.game.popupController.displayPausePopup();
		}, this);
		this.container.appendChild(this.pauseButton);
	}

	ObjectUtil.inherit(Header, AbstractView);

	return Header;

})();

