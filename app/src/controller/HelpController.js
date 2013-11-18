var HelpController = (function() {

  'use strict';

  function Help(config) {
    this.config = config;
    this.view = new HelpView(this);
  }

  ObjectUtil.inherit(Help, AbstractController);

	return Help;

})();