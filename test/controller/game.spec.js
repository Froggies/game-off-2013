define(['controller/GameController', 'view/GameView'], function() {

	describe('in game', function() {

		var game;

		beforeEach(function() {
			game = new GameController();
		});

		it(' should have 0 nbLoop before start', function () {
			expect(game.nbLoop).toBe(0);
		});

		it(' should have a view', function () {
			expect(game.view).toBeDefined();
		});

		it(' should have connect view with it', function () {
			expect(game.view.controller).toBe(game);
		});

		it(' should display finish after 10 loops', function () {
			for(var i=0; i<10; i++) {
				game.loop();
			}
			expect(game.loop()).toBe('finish');
		});	

		it(' should create a backlog', function () {
			expect(game.backlog).toBeDefined();
		});	

		it(' should create 5 columns', function () {
			expect(game.columns.length).toBe(5);
		});		

	});

});