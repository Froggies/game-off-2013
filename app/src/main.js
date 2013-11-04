window.onload = function() {
	console.log('start');

	var button = document.createElement('button');
	button.innerHTML = 'Add card';
	document.getElementsByTagName('body')[0].appendChild(button);
	
	var game = new GameController();
	game.start(document.getElementsByTagName('body')[0]);
	game.pause();

	button.onclick = function() {
		console.log('click');
		game.backlog.addCard();
	};
};