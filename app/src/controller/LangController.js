var LangController = (function() {

  'use strict';

  function Lang() {
    this.view = new LangView(this);
  }

  ObjectUtil.inherit(Lang, AbstractController);

  Lang.prototype.goEn = function() {
    location.hash = '#en';
    location.reload();
  };

  Lang.prototype.goFr = function() {
    location.hash = '#fr';
    location.reload();
  };

	return Lang;

})();