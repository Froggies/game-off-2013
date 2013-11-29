var HelpView = (function() {

  'use strict';

  function Help(controller) {
    Help.parent.constructor.apply(this, arguments);
    this.currentIndex = 0;
    this.container = ViewUtil.buildContainer('help');
    
    this.rightContainer = ViewUtil.buildContainer('right');
    this.currentImage = ViewUtil.buildImg(this.controller.config[0].img);
    this.rightContainer.appendChild(this.currentImage);
    this.prevButton = ViewUtil.buildButton(LangUtil.get('prev'), '', function() {
      this.selectItem(this.currentIndex-1, this.controller.config[this.currentIndex-1].img);
    }, this);
    this.rightContainer.appendChild(this.prevButton);
    this.nextButton = ViewUtil.buildButton(LangUtil.get('next'), '', function() {
      this.selectItem(this.currentIndex+1, this.controller.config[this.currentIndex+1].img);
    }, this);
    this.rightContainer.appendChild(this.nextButton);
    this.container.appendChild(this.rightContainer);

    this.listHelp = ViewUtil.buildElement('', 'ol');
    this.container.appendChild(this.listHelp);
    var index = 0;
    _.each(this.controller.config, function(item) {
      this.addItem(index, item.img, item.sentenceKey);
      index = index + 1;
    }, this);

    this.selectItem(0, this.controller.config[0].img);
    this.updateButtons();
  }

  ObjectUtil.inherit(Help, AbstractView);

  Help.prototype.addItem = function(index, urlImg, sentenceHelp) {
    var li = ViewUtil.buildElement('', 'li');
    li.innerHTML = LangUtil.get(sentenceHelp);
    ClickUtil.listen(li, function() {
      this.selectItem(index, urlImg);
    }, this);
    this.listHelp.appendChild(li);
  };

  Help.prototype.selectItem = function(index, urlImg) {
    this.currentImage.src = urlImg;
    this.currentIndex = index;
    _.each(this.listHelp.children, function(li) {
      li.className = '';
    });
    this.listHelp.children[index].className = 'selected';
    this.updateButtons();
  };

  Help.prototype.updateButtons = function() {
    if(this.currentIndex === 0) {
      ViewUtil.inactiveButton(this.prevButton);
    } else {
      ViewUtil.activeButton(this.prevButton);
    }
    if(this.currentIndex === this.controller.config.length - 1) {
      ViewUtil.inactiveButton(this.nextButton);
    } else {
      ViewUtil.activeButton(this.nextButton);
    }
  };

  return Help;

})();