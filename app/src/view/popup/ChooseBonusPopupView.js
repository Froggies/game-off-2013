var ChooseBonusPopupView = (function() {

	'use strict';

	function Popup(controller) {
		Popup.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('popup chooseBonusPopup');

		this.title = ViewUtil.buildElement('title', 'h1');
		this.title.innerHTML = 'Choose a bonus !';
		this.container.appendChild(this.title);

		this.content = ViewUtil.buildContainer('content');
		var button1 = ViewUtil.buildButton(
			'Backlog cards ++', 
			function() {
				this.content.removeChild(button1);
				this.controller.onChooseBacklogCardsImprovement();
			},
			this
		);
		this.content.appendChild(button1);

		var button2 = ViewUtil.buildButton(
			'Empty backlog', 
			function() {
				this.content.removeChild(button2);
				this.controller.onChooseEmptyBacklog();
			}, 
			this
		);
		this.content.appendChild(button2);

		var button3 = ViewUtil.buildButton(
			'Cards\' time --', 
			function() {
				this.content.removeChild(button3);
				this.controller.onChooseCardTimeMinus();
			},
			this
		);
		this.content.appendChild(button3);

		var button4 = ViewUtil.buildButton(
			'New dev', 
			function() {
				this.content.removeChild(button4);
				this.controller.onChooseNewDev();
			},
			this
		);
		this.content.appendChild(button4);

		var button5 = ViewUtil.buildButton(
			'New task in dev', 
			function() {
				this.content.removeChild(button5);
				this.controller.onChooseNewTask();
			},
			this
		); 
		this.content.appendChild(button5);

		var button6 = ViewUtil.buildButton(
			'Life ++', 
			function() {
				this.content.removeChild(button6);
				this.controller.onChooseLifeImprovement();
			},
			this
		); 
		this.content.appendChild(button6);

		this.container.appendChild(this.content);

		this.footer = ViewUtil.buildElement('footer', 'footer');
		this.footer.appendChild(ViewUtil.buildButton(
			'No thanks !', 
			controller.onNoChoose, 
			controller
		));
		this.container.appendChild(this.footer);

		
	}

	ObjectUtil.inherit(Popup, AbstractView);

	return Popup;

})();

