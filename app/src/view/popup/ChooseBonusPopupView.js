var ChooseBonusPopupView = (function() {

  'use strict';

  function Popup(controller) {
    Popup.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('popup chooseBonusPopup');

    this.title = ViewUtil.buildElement('title', 'h1');
    this.title.innerHTML = LangUtil.get('chooseBonusPopupTitle');
    this.container.appendChild(this.title);

    this.content = ViewUtil.buildContainer('content');
    
    buildButton(
      'backlogCardsImprovement',
      LangUtil.get('chooseBonusPopupBacklogCardsPP'), 
      this.content, 
      this.controller.onChooseBacklogCardsImprovement, 
      this.controller
    );
    buildButton(
      'emptyBacklog', 
      LangUtil.get('chooseBonusPopupEmptyBacklog'), 
      this.content, 
      this.controller.onChooseEmptyBacklog, 
      this.controller
    );
    buildButton(
      'cardTimeMinus', 
      LangUtil.get('chooseBonusPopupCardTimeMM'), 
      this.content, 
      this.controller.onChooseCardTimeMinus, 
      this.controller
    );
    buildButton(
      'newDev', 
      LangUtil.get('chooseBonusPopupNewDev'), 
      this.content, 
      this.controller.onChooseNewDev, 
      this.controller
    );
    buildButton(
      'newTask', 
      LangUtil.get('chooseBonusPopupNewTask'), 
      this.content, 
      this.controller.onChooseNewTask, 
      this.controller
    );
    buildButton(
      'lifeImprovement', 
      LangUtil.get('chooseBonusPopupLifePP'), 
      this.content, 
      this.controller.onChooseLifeImprovement, 
      this.controller
    );

    this.container.appendChild(this.content);

    this.footer = ViewUtil.buildElement('footer', 'footer');

    var chooseBonusPopupClose = ViewUtil.buildButton(
      LangUtil.get('chooseBonusPopupClose'), '',
      controller.onNoChoose, 
      controller);
    this.footer.appendChild(chooseBonusPopupClose);

    this.container.appendChild(this.footer);
  }

  ObjectUtil.inherit(Popup, AbstractView);

  var buildButton = function buildButton(title, description, container, callback, context) {
    var bonus = ViewUtil.buildContainer(title + ' btn');
    bonus.title = description;
    var imgBonus = ViewUtil.buildContainer('imgbonus');
    bonus.appendChild(imgBonus);
    ClickUtil.listen(bonus, function() {
      container.removeChild(bonus);
      callback.call(context);
    }, context);
    container.appendChild(bonus);
  };

  return Popup;

})();

