define(['controller/ColumnController', 'view/ColumnView'], function() {

	describe('in column', function() {

		var column;

		beforeEach(function() {
			column = new ColumnController();
		});

		it(' should have a view', function () {
			expect(column.view).toBeDefined();
		});

		it(' should have connect view with it', function () {
			expect(column.view.controller).toBe(column);
		});

		it(' should have a header column', function () {
			expect(column.header).toBeDefined();
		});

		it(' should have 5 rows', function () {
			expect(column.rows.length).toBe(5);
		});

	});

});