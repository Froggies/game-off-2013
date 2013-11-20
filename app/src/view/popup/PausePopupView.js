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
		this.timeContainer = ViewUtil.buildContainer('gauge');
		this.ellapsedTimeContainer = ViewUtil.buildContainer('bg-red');
		this.timeContainer.appendChild(this.ellapsedTimeContainer);
		this.container.appendChild(this.timeContainer);
		this.container.appendChild(this.content);
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

	Popup.prototype.show = function() {
		var time = 3000;
		if(this.interval !== undefined) {
			window.clearInterval(this.interval);
		}
		this.ellapsedTimeContainer.style.width = '100%';
		this.interval = TimeoutUtil.interval(function() {
			var percent = (time * 100) / 3000;
			this.ellapsedTimeContainer.style.width = percent + '%';
			time = time - 100;
			if(time <= 0) {
				this.controller.onClose();
				window.clearInterval(this.interval);
			}
		}, 100, this);
	};

	return Popup;

})();

