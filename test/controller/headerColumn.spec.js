define(['controller/HeaderColumnController', 'view/HeaderColumnView'], function() {

	describe('in header column', function() {

		var headerColumn;

		beforeEach(function() {
			headerColumn = new HeaderColumnController();
		});

		it(' should have a view', function () {
			expect(headerColumn.view).toBeDefined();
		});

		it(' should have connect view with it', function () {
			expect(headerColumn.view.controller).toBe(headerColumn);
		});

	});

});