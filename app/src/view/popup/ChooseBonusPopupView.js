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
      'Backlog cards ++',
      LangUtil.get('chooseBonusPopupBacklogCardsPP'), 
      this.content, 
      this.controller.onChooseBacklogCardsImprovement, 
      this.controller
    );
    buildButton(
      'Empty backlog', 
      LangUtil.get('chooseBonusPopupEmptyBacklog'), 
      this.content, 
      this.controller.onChooseEmptyBacklog, 
      this.controller
    );
    buildButton(
      'Cards\' time --', 
      LangUtil.get('chooseBonusPopupCardTimeMM'), 
      this.content, 
      this.controller.onChooseCardTimeMinus, 
      this.controller
    );
    buildButton(
      'New dev', 
      LangUtil.get('chooseBonusPopupNewDev'), 
      this.content, 
      this.controller.onChooseNewDev, 
      this.controller
    );
    buildButton(
      'New task in dev', 
      LangUtil.get('chooseBonusPopupNewTask'), 
      this.content, 
      this.controller.onChooseNewTask, 
      this.controller
    );
    buildButton(
      'Life ++', 
      LangUtil.get('chooseBonusPopupLifePP'), 
      this.content, 
      this.controller.onChooseLifeImprovement, 
      this.controller
    );

    this.container.appendChild(this.content);

    this.footer = ViewUtil.buildElement('footer', 'footer');
    this.footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('chooseBonusPopupClose'), 
      controller.onNoChoose, 
      controller
    ));
    this.container.appendChild(this.footer);
  }

  ObjectUtil.inherit(Popup, AbstractView);

  function buildButton(title, description, container, callback, context) {
    var button = ViewUtil.buildButton(
      title, 
      function(evt) {
        container.removeChild(button);
        callback.call(context);
      },
      context
    );
    var info = ViewUtil.buildButton('i', function(evt) {
      evt.stopPropagation();
      button.innerHTML = description;
      var returnButton = ViewUtil.buildButton('x', function(evt) {
        evt.stopPropagation();
        button.innerHTML = title;
        button.appendChild(info);
      });
      returnButton.className = 'info';
      button.appendChild(returnButton);
    });
    info.className = 'info';
    button.appendChild(info);

    container.appendChild(button);
  }

  return Popup;

})();

