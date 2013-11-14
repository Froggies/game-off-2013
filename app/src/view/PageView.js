var PageView = (function() {

	'use strict';

	function Page(controller) {
		Page.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('page');
	}

	ObjectUtil.inherit(Page, AbstractView);

	Page.prototype.showFirstPage = function() {
		var b = document.createElement('button');
		this.container.className = 'page firstPage';
		this.container.innerHTML = [
			'<h1 class="title">', 'Welcome in the Game !', '</h1>',
			'<div class="content">',
			'You are a tyrannical project chief and you have to affect tasks to your developpers. You have to make evolve your team, to cope with change, to treat a large amount of tasks, before the backlog blows up.',
			'</div>',
			'<footer class="footer">', '', '</footer>'
		].join('');
		var footer = this.container.getElementsByTagName('footer')[0];
		footer.appendChild(ViewUtil.buildButton(
			'Help', 
			this.controller.showHelpPage, this.controller
		));
		footer.appendChild(ViewUtil.buildButton(
			'Start', 
			this.controller.showChooseUserPage, this.controller
		));
	};

	Page.prototype.showHelpPage = function() {
		this.container.className = 'page helpPage';
		this.container.innerHTML = [
			'<h1 class="title">', 'Help', '</h1>',
			'<div class="content">',
			'<ul>',
			'<li>d&d card from backlog to dev</li>',
      '<li>3 same cards adjacents == immediate do</li>',
      '<li>each level pass == new dev or new task for a dev</li>',
      '</ul>',
			'</div>',
			'<footer class="footer">', '', '</footer>'
		].join('');
		var footer = this.container.getElementsByTagName('footer')[0];
		footer.appendChild(ViewUtil.buildButton(
			'Back', 
			this.controller.showFirstPage, this.controller
		));
	};

	Page.prototype.showChooseUserPage = function() {
		this.container.className = 'page chooseUserPage';
		this.container.innerHTML = [
			'<h1 class="title">', 'Choose your player !', '</h1>',
			'<div class="content"></div>',
			'<footer class="footer">', '', '</footer>'
		].join('');
		var content = this.container.getElementsByClassName('content')[0];
		content.appendChild(ViewUtil.buildButtonImg(
			'assets/img/dev1.png', 
			'Dev1', 
			this.controller.startGame, this.controller
		));
		content.appendChild(ViewUtil.buildButtonImg(
			'assets/img/github.png', 
			'Connect Github', 
			this.controller.startGame, this.controller
		));
		var footer = this.container.getElementsByTagName('footer')[0];
		footer.appendChild(ViewUtil.buildButton(
			'Back', 
			this.controller.showFirstPage, this.controller
		));
	};

	return Page;

})();