var dependencies = [
	'view/ColumnView'
];

define(dependencies, function() {

	describe('a column', function() {

		var column;

		beforeEach(function() {
			column = new ColumnView();
		});

		it('should have a container', function () {
			expect(column.container).toBeDefined();
		});

		it('should draw in element', function () {
			var div = document.createElement('div');
			column.draw(div);
			expect(div.children[0]).toBeDefined();
		});

		it('should set correct className', function () {
			var div = document.createElement('div');
			column.draw(div);
			expect(div.children[0].className).toBe('column');
		});

	});

});