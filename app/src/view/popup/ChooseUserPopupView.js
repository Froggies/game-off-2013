var ChooseUserPopupView = (function() {

	'use strict';

	function Popup(controller) {
		Popup.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('popup chooseUserPopup');

		this.title = ViewUtil.buildElement('title', 'h1');
		this.title.innerHTML = 'Choose your player !';
		this.container.appendChild(this.title);

		this.content = ViewUtil.buildContainer('content');
		this.content.appendChild(ViewUtil.buildButtonImg(
			'assets/img/dev1.png', 
			'Dev1', 
			controller.onGoDev1, controller
		));
		this.content.appendChild(ViewUtil.buildButtonImg(
			'assets/img/github.png', 
			'Connect Github', 
			controller.onGoGithub, controller
		));
		this.container.appendChild(this.content);

		this.footer = ViewUtil.buildElement('footer', 'footer');
		this.footer.appendChild(ViewUtil.buildButton(
			'Back', 
			controller.onGoBack, 
			controller
		));
		this.container.appendChild(this.footer);

		
	}

	ObjectUtil.inherit(Popup, AbstractView);

	return Popup;

})();

