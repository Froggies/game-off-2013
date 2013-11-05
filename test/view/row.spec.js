var dependencies = [
	'view/RowView'
];

define(dependencies, function() {

	describe('a row', function() {

		var row;

		beforeEach(function() {
			row = new RowView();
		});

		it('should have a container', function () {
			expect(row.container).toBeDefined();
		});

		it('should draw in element', function () {
			var div = document.createElement('div');
			row.draw(div);
			expect(div.children[0]).toBeDefined();
		});

		it('should set correct className', function () {
			var div = document.createElement('div');
			row.draw(div);
			expect(div.children[0].className).toBe('row');
		});

	});

});