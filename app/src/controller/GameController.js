var GameController = (function() {

	'use strict';

	function Game() {
		this.nbLoop = 0;
		this.timeout = undefined;

		this.view = new GameView(this);
		this.backlog = new BacklogController(this);
		this.score = new ScoreController();
		this.user = new UserController(this);
		this.columns = [];
		this.hasChooseBonus = false;
		this.nbCardsInBacklogMax = Constants.NB_CARDS_IN_BACKLOG_MAX;
		for(var i=0; i<Constants.NB_COLUMNS; i++) {
			this.columns.push(new ColumnController(this));
		}
		this.bonus = new BonusController(this);
	}

	ObjectUtil.inherit(Game, AbstractController);

	Game.prototype.start = function(element) {
		this.view.draw(element);
		this.score.start(this.user.view.containerScore);
		this.backlog.start(this.view.container);
		this.user.start(this.view.container);
		this.view.drawColumnsContainer();
		for(var indexColumn=0; indexColumn < this.columns.length; indexColumn++) {
			this.columns[indexColumn].start(this.view.getColumnsContainer());
		}
		this.bonus.start(this.view.container);
		this.resume();
	};

	Game.prototype.pause = function() {
		window.clearInterval(this.timeout);
		this.timeout = undefined;
    this.backlog.pause();
		_.each(this.columns, function(column) {
			column.pause();
		});
	};

	Game.prototype.resume = function() {
		if(this.timeout === undefined) {
			this.timeout = TimeoutUtil.interval(function() {
				if(this.loop() === 'finish') {
					window.clearInterval(this.timeout);
				}
			}, GameUtil.calculTimeNewCard(this.score.score), this);
      this.backlog.resume();
			_.each(this.columns, function(column) {
				column.resume();
			});
		}
	};

	Game.prototype.deleteCardInBacklog = function(card) {
		this.backlog.removeCard(card);
		if(this.search3cardsAdjacent() === true) {
			this.deleteCardInBacklog();
		}
	};

	Game.prototype.search3cardsAdjacent = function() {
		var prevColumn, nextColumn;
		for (var indexColumn = 0; indexColumn < this.columns.length; indexColumn++) {
			var column = this.columns[indexColumn];
			if(indexColumn < this.columns.length) {
				nextColumn = this.columns[indexColumn+1];
			}
			var points = column.search3cardsAdjacent(prevColumn, nextColumn); 
			if(points !== false) {
				this.incrementeScore(points);
				return true;
			}
			prevColumn = column;
		}
		return false;
	};

	Game.prototype.incrementeScore = function(score) {
		this.score.incrementeBy(score);
		if(ScoreUtil.isNextLevel(this.score.score, this.score.level) === true) {
			this.pause();//TODO rework update time card backlog
			this.resume();//TODO rework update time card backlog
			this.score.level = this.score.level + 1;
			this.score.incrementeBy(0);//TODO rework refresh view method
			this.hasChooseBonus = false;
			_.each(this.columns, function(column) {
				column.setCanBeActivate(true);
			});
		}
		if(this.score.level > 0 && this.score.level % 3 === 0 && this.hasChooseBonus === false) {
			this.hasChooseBonus = true;
			this.pause();
			this.popupController.displayChooseBonusPopup();
		}
	};

	Game.prototype.loop = function() {
		this.nbLoop = this.nbLoop + 1;
		this.backlog.addCard(CardUtil.buildCard(this.score.level));
		if(this.backlog.cards.length > this.nbCardsInBacklogMax) {
			this.score.loose();
			return 'finish';
		}
	};

	Game.prototype.columnIsActivated = function() {
		_.each(this.columns, function(column) {
			column.setCanBeActivate(false);
		});
	};

	return Game;

})();

