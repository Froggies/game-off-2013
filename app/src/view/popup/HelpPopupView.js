var HelpPopupView = (function() {

	'use strict';

	function Popup(controller) {
		Popup.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('popup helpPopup');
		this.title = ViewUtil.buildElement('', 'ul');
		this.title.innerHTML = '<li>d&d card from backlog to dev</li>' +
        '<li>3 same cards adjacents == immediate do</li>' +
        '<li>each level pass == new dev or new task for a dev</li>';
		this.container.appendChild(this.title);
		
		this.buttonBack = ViewUtil.buildButton('Back');
		this.container.appendChild(this.buttonBack);
		ClickUtil.listen(this.buttonBack, controller.onGoBack, controller);
	}

	ObjectUtil.inherit(Popup, AbstractView);

	return Popup;

})();

