var dependencies = [
	'controller/RowController', 'view/RowView'
];

define(dependencies, function() {

	describe('a row', function() {

		var row;

		beforeEach(function() {
			row = new RowController();
		});

		it('should have a view', function () {
			expect(row.view).toBeDefined();
		});

		it('should have connect view with it', function () {
			expect(row.view.controller).toBe(row);
		});

		it('should be active when set it', function () {
			row.activate();
			expect(row.isActive).toBe(true);
		});

		it('should add a card', function () {
			var card = CardUtil.buildCard();
			row.addCard(card);
			expect(row.card).toBe(card);
		});

		it('should delete this card', function () {
			row.addCard(CardUtil.buildCard());
			row.removeCard();
			expect(row.card).toBeUndefined();
		});

	});

});