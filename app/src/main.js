window.onload = function() {

	var globalContainer = document.getElementById('globalContainer');

	var game = new GameController();
	game.start(globalContainer);

	new PopupController(
		game, 
		document.getElementById('glass'), 
		document.getElementById('firstPopup'),
		document.getElementById('helpPopup'),
		document.getElementById('chooseUserPopup')
	);

	var button;

	var divButtons = document.createElement('div');

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

	globalContainer.appendChild(divButtons);
	
	game.columns[0].setCanBeActivate(true);
	game.columns[0].activate();
	game.pause();

};