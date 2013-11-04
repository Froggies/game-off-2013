var dependencies = [
	'controller/BacklogController', 'view/BacklogView', 
	'util/UtilView', 'util/UtilDragAndDrop'
];

define(dependencies, function() {

	describe('in backlog', function() {

		var backlog;

		beforeEach(function() {
			backlog = new BacklogController();
		});

		it(' should have a view', function () {
			expect(backlog.view).toBeDefined();
		});

		it(' should have connect view with it', function () {
			expect(backlog.view.controller).toBe(backlog);
		});

		it(' should have 0 card at start', function () {
			expect(backlog.cards.length).toBe(0);
		});

		it(' should have 1 card after call addCard', function () {
			backlog.addCard();
			expect(backlog.cards.length).toBe(1);
		});

		it(' should have 0 card after call removeCard', function () {
			var card = backlog.addCard();
			backlog.removeCard(card);
			expect(backlog.cards.length).toBe(0);
		});

		it(' should remove specific card', function () {
			var card = backlog.addCard();
			var cardToRemove = backlog.addCard();
			var card2 = backlog.addCard();
			backlog.removeCard(cardToRemove);
			expect(backlog.cards.length).toBe(2);
			expect(backlog.cards[0]).toBe(card);
			expect(backlog.cards[1]).toBe(card2);
		});

	});

});