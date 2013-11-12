window.onload = function() {

	var globalContainer = document.getElementById('globalContainer');

	var game = new GameController();
	game.start(globalContainer);

	var popups = new PopupController(
		game, 
		document.getElementById('glass'), 
		document.getElementsByTagName('body')[0]
	);

	game.popupController = popups;

	game.columns[0].setCanBeActivate(true);
	game.columns[0].activate();
	game.pause();

};