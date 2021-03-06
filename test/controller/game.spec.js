var dependencies = [
  'controller/GameController', 'view/GameView', 
  'controller/ColumnController', 'view/ColumnView',
  'controller/HeaderColumnController', 'view/HeaderColumnView',
  'controller/RowController', 'view/RowView',
  'controller/BacklogController', 'view/BacklogView',
  'controller/UserController', 'view/UserView',
  'controller/BonusController', 'view/BonusView',
  'util/ClickUtil', 'util/GameUtil', 'util/LangUtil',
  'util/CompatibilityUtil',
  'controller/HeaderController', 'view/HeaderView'
];

define(dependencies, function() {

  describe('a game', function() {

    var game;

    window.AudioUtil = {
      disable: function() {},
      enable: function() {},
      isEnable: function() {},
      canBeEnable: function() {},
      click: function() {},
      money: function() {},
      moneyStop: function() {},
      levelUp: function() {},
      bonusReady: function() {},
      sprint: function() {},
      keyboard: function() {},
      keyboardStop: function() {},
      loose: function() {},
      accueil: function() {},
      accueilStop: function() {},
      end: function() {},
      endStop: function() {},
      inGame: function() {},
      inGameStop: function() {}
    };

    beforeEach(function() {
      game = new GameController('classic', {
        showEndPage: function() {},
        start: function() {}
      });
    });

    it('should have a view', function () {
      expect(game.view).toBeDefined();
    });

    it('should have connect view with it', function () {
      expect(game.view.controller).toBe(game);
    });

    it('should display finish after NB_CARDS_IN_BACKLOG_MAX * NB_LIFE loops', function () {
      var nbLoop = Constants.NB_CARDS_IN_BACKLOG_MAX*Constants.NB_LIFE;
      nbLoop = nbLoop + Constants.NB_LIFE - 1;//because we add 1 card in backlog before loose
      for(var i=0; i<nbLoop; i++) {
        game.loop();
      }
      expect(game.loop()).toBe('finish');
    }); 

    it('should create a backlog', function () {
      expect(game.backlog).toBeDefined();
    }); 

    it('should create 5 columns', function () {
      expect(game.columns.length).toBe(5);
    });   

    function initColumnWith1Card(column, cardType) {
      var card = CardUtil.buildCard();
      card.type = cardType;
      column.setCanBeActivate(true);
      column.activate();
      column.activeNextRow();
      column.addCard(card);
    }

    it('should remove 3 cards when same cards type is adjacents multiple times', function () {
      Constants.NB_LVL_BONUS = 3;
      _.each(game.columns, function(column) {
        initColumnWith1Card(column, 'fake');
      });
      var column = game.columns[0];
      var card1 = CardUtil.buildCard();
      card1.type = 'fake2';
      column.activeNextRow();
      column.addCard(card1);
      var card2 = CardUtil.buildCard();
      card2.type = 'fake2';
      column.activeNextRow();
      column.addCard(card2);
      var card3 = CardUtil.buildCard();
      card3.type = 'fake2';
      column.activeNextRow();
      column.addCard(card3);

      game.deleteCardInBacklog();
      expect(game.columns[0].rows[0].card).toBeUndefined();
    });

  });

});