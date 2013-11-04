define(['controller/RowController', 'view/RowView'], function() {

	describe('in row', function() {

		var row;

		beforeEach(function() {
			row = new RowController();
		});

		it(' should have a view', function () {
			expect(row.view).toBeDefined();
		});

		it(' should have connect view with it', function () {
			expect(row.view.controller).toBe(row);
		});

	});

});