var PausePopupView = (function() {

	'use strict';

	function Popup(controller) {
		Popup.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('popup pausePopup');

		this.title = ViewUtil.buildElement('title', 'h1');
		this.title.innerHTML = LangUtil.get('pausePopupTitle');
		this.container.appendChild(this.title);

		this.content = ViewUtil.buildContainer('content');
		this.content.innerHTML = LangUtil.get('pausePopupSentence');
		this.container.appendChild(this.content);

		this.footer = ViewUtil.buildElement('footer', 'footer');
		this.footer.appendChild(ViewUtil.buildButton(
			LangUtil.get('pausePopupClose'), 
			controller.onClose, 
			controller
		));
		this.container.appendChild(this.footer);
	}

	ObjectUtil.inherit(Popup, AbstractView);

	return Popup;

})();

