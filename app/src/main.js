window.onload = function() {

	var game = new GameController();
	var button;

	function addListen(button, i) {
		button.onclick = function() {
			game.columns[i].activate();
		};
	}

	function addRowListen(button, i) {
		button.onclick = function() {
			game.columns[i].activeNextRow();
		};
	}

	var divButtons = document.createElement('div');

	button = document.createElement('button');
	button.innerHTML = 'Add card';
	button.onclick = function() {
		game.backlog.addCard();
	};
	divButtons.appendChild(button);

	button = document.createElement('button');
	button.innerHTML = 'Log backlog';
	button.onclick = function() {
		console.log(game.backlog);
	};
	divButtons.appendChild(button);

	divButtons.appendChild(document.createElement('br'));

	for(var i=0; i<5; i++) {
		button = document.createElement('button');
		button.innerHTML = 'Active column';
		divButtons.appendChild(button);
		addListen(button, i);
	}

	var subdivButtons = document.createElement('div');

	for(var j=0; j<5; j++) {
		button = document.createElement('button');
		button.innerHTML = 'Active new row';
		subdivButtons.appendChild(button);
		addRowListen(button, j);
	}

	divButtons.appendChild(subdivButtons);

	document.getElementsByTagName('body')[0].appendChild(divButtons);
	
	game.start(document.getElementsByTagName('body')[0]);
	game.columns[0].activate();
	game.columns[0].activeNextRow();
	game.pause();

};