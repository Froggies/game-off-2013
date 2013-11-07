window.onload = function() {

	var game = new GameController();
	game.start(document.getElementsByTagName('body')[0]);
	
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
		game.backlog.addCard(CardUtil.buildCard());
	};
	divButtons.appendChild(button);

	button = document.createElement('button');
	button.innerHTML = 'Log backlog';
	button.onclick = function() {
		console.log(game.backlog);
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
	
	game.columns[0].activate();
	game.columns[0].activeNextRow();

	window.alert('Start !!??');

};