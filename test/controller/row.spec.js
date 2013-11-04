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

	});

});