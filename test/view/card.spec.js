var dependencies = [
	'view/CardView'
];

define(dependencies, function() {

	describe('a card', function() {

		var card;
		var type = 'fake';
		var complexity = 0.5;

		beforeEach(function() {
			card = new CardView({
				type: type, 
				complexity: complexity
			});
		});

		it('should have a container', function () {
			expect(card.container).toBeDefined();
		});

		it('should draw in element', function () {
			var div = document.createElement('div');
			card.draw(div);
			expect(div.children[0]).toBeDefined();
		});

		it('should set correct className', function () {
			var div = document.createElement('div');
			card.draw(div);
			expect(div.children[0].className).toBe('card');
		});

		it('should display type', function () {
			expect(card.container.innerHTML).toBe(type);
		});

	});

});