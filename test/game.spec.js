define(['game'], function(game2) {

	describe('in game', function() {

		beforeEach(function() {
		});

		it(' should have 0 nbLoop before start', function () {
			expect(game.getNbLoop()).toBe(0);
		});

		it('start function should create a backlog', function () {
			game.start();
			dump(game.getBacklog());
			expect(game.getBacklog()).toBeDefined();
		});

	});

});