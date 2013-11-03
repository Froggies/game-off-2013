define(['controller/CardController', 'view/CardView'], function() {

	describe('in card', function() {

		var card;

		beforeEach(function() {
			card = new CardController();
		});

		it(' should have a view', function () {
			expect(card.view).toBeDefined();
		});

		it(' should have connect view with it', function () {
			expect(card.view.controller).toBe(card);
		});

	});

});