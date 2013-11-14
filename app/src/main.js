window.onload = function() {

	var globalContainer = document.getElementById('globalContainer');

	var game = new GameController();
	//game.start(globalContainer);

	var popups = new PopupController(
		game, 
		document.getElementById('glass'), 
		document.getElementsByTagName('body')[0]
	);

	popups.start();

	game.popupController = popups;

	game.columns[0].setCanBeActivate(true);
	game.columns[0].activate();
	game.pause();

	var page = new PageController(game, globalContainer);
	page.start(globalContainer);
	page.showFirstPage();

};