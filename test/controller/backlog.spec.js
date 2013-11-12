var dependencies = [
	'constants',
	'util/ObjectUtil', 'controller/AbstractController',
	'controller/BacklogController', 'view/BacklogView', 
	'util/ViewUtil', 'util/DragAndDropUtil'
];

define(dependencies, function() {

	describe('in backlog', function() {

		var backlog;
		var level = 0;
		var game = {nbCardsInBacklogMax: Constants.NB_CARDS_IN_BACKLOG_MAX};

		beforeEach(function() {
			backlog = new BacklogController(game);
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
			backlog.addCard(CardUtil.buildCard(level));
			expect(backlog.cards.length).toBe(1);
		});

		it(' should have 0 card after call removeCard', function () {
			var card = CardUtil.buildCard(level);
			backlog.addCard(card);
			backlog.removeCard(card);
			expect(backlog.cards.length).toBe(0);
		});

		it(' should remove specific card', function () {
			var card = CardUtil.buildCard(level);
			backlog.addCard(card);
			var cardToRemove = CardUtil.buildCard(level);
			backlog.addCard(cardToRemove);
			var card2 = CardUtil.buildCard(level);
			backlog.addCard(card2);
			backlog.removeCard(cardToRemove);
			expect(backlog.cards.length).toBe(2);
			expect(backlog.cards[0]).toBe(card);
			expect(backlog.cards[1]).toBe(card2);
		});

	});

});