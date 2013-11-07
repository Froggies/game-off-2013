window.onload = function() {

	var game = new GameController();
	game.start(document.getElementsByTagName('body')[0]);

	var button;

	var divButtons = document.createElement('div');

	button = document.createElement('button');
	button.innerHTML = 'Add card';
	button.onclick = function() {
		game.backlog.addCard(CardUtil.buildCard());
	};
	divButtons.appendChild(button);

	button = document.createElement('button');
	button.innerHTML = 'Pause';
	button.onclick = function() {
		game.pause();
	};
	divButtons.appendChild(button);

	button = document.createElement('button');
	button.innerHTML = 'Resume';
	button.onclick = function() {
		game.resume();
	};
	divButtons.appendChild(button);

	document.getElementsByTagName('body')[0].appendChild(divButtons);
	
	game.columns[0].setCanBeActivate(true);
	game.columns[0].activate();

	window.alert('Start !!??');

};