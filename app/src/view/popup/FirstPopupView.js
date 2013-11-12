var FirstPopupView = (function() {

	'use strict';

	function Popup(controller) {
		Popup.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('popup firstPopup');
		
		this.title = ViewUtil.buildElement('title', 'h1');
		this.title.innerHTML = 'Welcome in the Game !';
		this.container.appendChild(this.title);

		this.footer = ViewUtil.buildElement('footer', 'footer');
		this.footer.appendChild(ViewUtil.buildButton(
			'Help', 
			controller.onGoHelp, controller
		));
		this.footer.appendChild(ViewUtil.buildButton(
			'Start', 
			controller.onGoStart, controller
		));
		this.container.appendChild(this.footer);
	}

	ObjectUtil.inherit(Popup, AbstractView);

	return Popup;

})();

