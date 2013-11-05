var dependencies = [
	'controller/ColumnController', 'view/ColumnView',
	'controller/GameController', 'view/GameView',
	'constants'
];

define(dependencies, function() {

	describe('a column', function() {

		var column;

		beforeEach(function() {
			column = new ColumnController({deleteCardInBacklog: function(){}});
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

		it('should be active after activate call', function () {
			column.activate();
			expect(column.isActive).toBe(true);
		});

		it('should active 1 new row', function () {
			column.activeNextRow();
			expect(column.rows[0].isActive).toBe(true);
		});

		it('should add card in first row', function () {
			var card = new CardController();
			column.activeNextRow();
			column.addCard(card);
			expect(column.rows[0].card).toBe(card);
		});

		it('should not add card when row is not activate', function () {
			var card = new CardController();
			column.activeNextRow();
			column.addCard(card);
			var card2 = new CardController();
			column.addCard(card2);
			expect(column.rows[1].card).toBeUndefined();
		});

		it('should add card in second row when first is full', function () {
			var card = new CardController();
			column.activeNextRow();
			column.addCard(card);
			var card2 = new CardController();
			column.activeNextRow();
			column.addCard(card2);
			expect(column.rows[1].card).toBe(card2);
		});

	});

});