var FirstPopupView = (function() {

	'use strict';

	function Popup(controller) {
		Popup.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('popup firstPopup');
		this.title = ViewUtil.buildElement('title', 'h1');
		this.title.innerHTML = 'Welcome in the Game !';
		this.container.appendChild(this.title);
		this.buttonHelp = ViewUtil.buildButton('Help');
		this.container.appendChild(this.buttonHelp);
		ClickUtil.listen(this.buttonHelp, controller.onGoHelp, controller);
		this.buttonStart = ViewUtil.buildButton('Start');
		this.container.appendChild(this.buttonStart);
		ClickUtil.listen(this.buttonStart, controller.onGoStart, controller);
	}

	ObjectUtil.inherit(Popup, AbstractView);

	return Popup;

})();

