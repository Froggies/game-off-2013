var dependencies = [
	'util/ClickUtil'
];

define(dependencies, function() {

	describe('a click util', function() {

		beforeEach(function() {
		});

		it('should exec function in special context', function () {
			var context = {ok: false};
			var div = document.createElement('div');
			ClickUtil.listen(div, function() {
				this.ok = true;
			}, context);
			div.onclick();
			waitsFor(function() {
				return context.ok;
			}, 'context.ok should be true', 1);
			runs(function() {
				expect(context.ok).toBeTruthy();
			});
		});

	});

});