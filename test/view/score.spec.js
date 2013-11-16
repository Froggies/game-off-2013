var dependencies = [
	'view/ScoreView'
];

define(dependencies, function() {

	describe('a score', function() {

		var score;
		var fakeController = {score: 0};

		beforeEach(function() {
			score = new ScoreView(fakeController);
		});

		it('should have a container', function () {
			expect(score.container).toBeDefined();
		});

		it('should draw in element', function () {
			var div = document.createElement('div');
			score.draw(div);
			expect(div.children[0]).toBeDefined();
		});

		it('should set correct className', function () {
			var div = document.createElement('div');
			score.draw(div);
			expect(div.children[0].className).toContain('score');
		});

		it('should show score', function () {
			var div = document.createElement('div');
			score.draw(div);
			score.updateScore();
			fakeController.score = 1;
			waitsFor(function() {
				return score.tempScore > 0;
			}, 'should increment tempScore', 1000);
			runs(function() {
				expect(score.container.innerHTML).toContain('1 $');
			});
		});

		it('should update score', function () {
			var div = document.createElement('div');
			score.draw(div);
			score.updateScore();
			waitsFor(function() {
				return score.tempScore > 0;
			}, 'should increment tempScore', 1000);
			runs(function() {
				expect(score.container.innerHTML).toContain('1 $');
			});
			fakeController.score = 5;
			score.updateScore();
			waitsFor(function() {
				return score.tempScore >= 5;
			}, 'should increment tempScore', 1500);
			runs(function() {
				expect(score.container.innerHTML).toContain('5 $');
			});
		});

	});

});