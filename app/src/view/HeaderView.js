var HeaderView = (function() {

  'use strict';

  function Header(controller) {
    Header.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('header');
    this.container.appendChild(
      ViewUtil.buildMainButton(
        '||', 
        'buttonPause', 
        function() {
          this.controller.game.pause();
          this.controller.game.popupController.displayPausePopup();
        }, 
        this)
    );
  }

  ObjectUtil.inherit(Header, AbstractView);

  return Header;

})();

