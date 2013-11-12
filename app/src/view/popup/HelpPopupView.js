var HelpPopupView = (function() {

	'use strict';

	function Popup(controller) {
		Popup.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('popup helpPopup');

		this.title = ViewUtil.buildElement('title', 'h1');
		this.title.innerHTML = 'Help';
		this.container.appendChild(this.title);

		this.content = ViewUtil.buildContainer('content');
		this.list = ViewUtil.buildElement('', 'ul');
		this.list.innerHTML = '<li>d&d card from backlog to dev</li>' +
      '<li>3 same cards adjacents == immediate do</li>' +
      '<li>each level pass == new dev or new task for a dev</li>';
    this.content.appendChild(this.list);
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

