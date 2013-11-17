var PageView = (function() {

  'use strict';

  function Page(controller) {
    Page.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('page');
  }

  ObjectUtil.inherit(Page, AbstractView);

  Page.prototype.showFirstPage = function() {
    var b = document.createElement('button');
    this.container.className = 'page firstPage';
    this.container.innerHTML = [
      '<h1 class="title">', LangUtil.get('firstPageTile'), '</h1>',
      '<div class="content">',
      LangUtil.get('firstPageDescription'),
      '</div>',
      '<footer class="footer">', '', '</footer>'
    ].join('');
    var title = this.container.getElementsByTagName('h1')[0];
    var lang = new LangController();
    lang.start(title);
    var footer = this.container.getElementsByTagName('footer')[0];
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('firstPageHelp'), 
      this.controller.showHelpPage, this.controller
    ));
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('firstPageStart'), 
      this.controller.showChooseUserPage, this.controller
    ));
  };

  Page.prototype.showHelpPage = function() {
    this.container.className = 'page helpPage';
    this.container.innerHTML = [
      '<h1 class="title">', LangUtil.get('helpPageTitle'), '</h1>',
      '<div class="content">',
      '<ul>',
      '<li>d&d card from backlog to dev</li>',
      '<li>3 same cards adjacents == immediate do</li>',
      '<li>each level pass == new dev or new task for a dev</li>',
      '</ul>',
      '</div>',
      '<footer class="footer">', '', '</footer>'
    ].join('');
    var footer = this.container.getElementsByTagName('footer')[0];
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('helpPageBack'), 
      this.controller.showFirstPage, this.controller
    ));
  };

  Page.prototype.showChooseUserPage = function() {
    this.container.className = 'page chooseUserPage';
    this.container.innerHTML = [
      '<h1 class="title">', LangUtil.get('chooseUserPageTitle'), '</h1>',
      '<div class="content"></div>',
      '<footer class="footer">', '', '</footer>'
    ].join('');
    var content = this.container.getElementsByClassName('content')[0];
    content.appendChild(ViewUtil.buildButtonImg(
      'logo classic', 
      '', 
      function() {
        this.controller.startGame('classic');
      }, 
      this
    ));
    content.appendChild(ViewUtil.buildButtonImg(
      'logo froggies', 
      '', 
      function() {
        this.controller.startGame('froggies');
      }, 
      this
    ));
    content.appendChild(ViewUtil.buildButtonImg(
      'logo github', 
      '', 
      function() {
        this.controller.startGame('github');
      }, 
      this
    ));
    var footer = this.container.getElementsByTagName('footer')[0];
    footer.appendChild(ViewUtil.buildButton(
      LangUtil.get('chooseUserPageBack'), 
      this.controller.showFirstPage, this.controller
    ));
  };

  return Page;

})();