var dependencies = [
	'controller/GameController', 'view/GameView', 
	'controller/ColumnController', 'view/ColumnView',
	'controller/HeaderColumnController', 'view/HeaderColumnView',
	'controller/RowController', 'view/RowView',
	'controller/BacklogController', 'view/BacklogView'
];

define(dependencies, function() {

	describe('a game', function() {

		var game;

		beforeEach(function() {
			game = new GameController();
		});

		it('should have 0 nbLoop before start', function () {
			expect(game.nbLoop).toBe(0);
		});

		it('should have a view', function () {
			expect(game.view).toBeDefined();
		});

		it('should have connect view with it', function () {
			expect(game.view.controller).toBe(game);
		});

		it('should display finish after NB_CARDS_IN_BACKLOG_MAX loops', function () {
			for(var i=0; i<Constants.NB_CARDS_IN_BACKLOG_MAX; i++) {
				game.loop();
			}
			expect(game.loop()).toBe('finish');
		});	

		it('should create a backlog', function () {
			expect(game.backlog).toBeDefined();
		});	

		it('should create 5 columns', function () {
			expect(game.columns.length).toBe(5);
		});		

	});

});