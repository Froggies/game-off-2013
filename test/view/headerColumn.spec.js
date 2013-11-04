var dependencies = [
	'view/HeaderColumnView'
];

define(dependencies, function() {

	describe('in header column', function() {

		var headerColumn;

		beforeEach(function() {
			headerColumn = new HeaderColumnView();
		});

		it(' should have a container', function () {
			expect(headerColumn.container).toBeDefined();
		});

		it(' should draw in element', function () {
			var div = document.createElement('div');
			headerColumn.draw(div);
			expect(div.children[0]).toBeDefined();
		});

		it(' should set correct className', function () {
			var div = document.createElement('div');
			headerColumn.draw(div);
			expect(div.children[0].className).toBe('headerColumn');
		});

	});

});