var dependencies = [
	'controller/ColumnController', 'view/ColumnView',
	'controller/GameController', 'view/GameView',
	'controller/ScoreController', 'view/ScoreView',
	'constants'
];

define(dependencies, function() {

	describe('a column', function() {

		var column;

		beforeEach(function() {
			column = new ColumnController({
				deleteCardInBacklog: function(){}, 
				incrementeScore: function(){},
				columnIsActivated: function(){}
			});
		});

		it('should have a view', function () {
			expect(column.view).toBeDefined();
		});

		it('should have connect view with it', function () {
			expect(column.view.controller).toBe(column);
		});

		it('should have a header column', function () {
			expect(column.header).toBeDefined();
		});

		it('should have 5 rows', function () {
			expect(column.rows.length).toBe(5);
		});

		it('should refuse card when it full', function () {
			var card = new CardController();
			expect(column.addCard(card)).toBe(false);
		});

		it('should be inactive at start', function () {
			expect(column.isActive).toBe(false);
		});

		it('should be active after activate call and canBeActivate is true', function () {
			column.setCanBeActivate(true);
			column.activate();
			expect(column.isActive).toBe(true);
		});

		it('should active 1 new row', function () {
			column.setCanBeActivate(true);
			column.activate();
			column.activeNextRow();
			expect(column.rows[0].isActive).toBe(true);
		});

		it('should add card in first row', function () {
			var card = CardUtil.buildCard();
			column.setCanBeActivate(true);
			column.activate();
			column.activeNextRow();
			column.addCard(card);
			expect(column.rows[0].card).toBe(card);
		});

		it('should not add card when row is not activate', function () {
			var card = CardUtil.buildCard();
			column.setCanBeActivate(true);
			column.activate();
			column.addCard(card);
			var card2 = CardUtil.buildCard();
			column.addCard(card2);
			expect(column.rows[1].card).toBeUndefined();
		});

		it('should add card in second row when first is full', function () {
			var card = CardUtil.buildCard();
			column.setCanBeActivate(true);
			column.activate();
			column.activeNextRow();
			column.addCard(card);
			var card2 = CardUtil.buildCard();
			column.activeNextRow();
			column.addCard(card2);
			expect(column.rows[1].card).toBe(card2);
		});

		it('should move others cards to the top', function () {
			var card = CardUtil.buildCard();
			column.setCanBeActivate(true);
			column.activate();
			column.activeNextRow();
			column.addCard(card);
			var card2 = CardUtil.buildCard();
			column.activeNextRow();
			column.addCard(card2);
			var card3 = CardUtil.buildCard();
			column.activeNextRow();
			column.addCard(card3);
			column.timeFinish();
			expect(column.rows[0].card).toBe(card2);
			expect(column.rows[1].card).toBe(card3);
			expect(column.rows[2].card).toBeUndefined();
		});

		it('should remove current card when card time is finish', function () {
			var card = CardUtil.buildCard();
			card.time = 0;
			column.activeNextRow();
			column.addCard(card);
			waitsFor(function() {
				return column.rows[0].card === undefined;
			}, 'should be delete card', 1);
			runs(function() {
				expect(column.rows[0].card).toBeUndefined();
			});
		});

	});

});