var LangView = (function() {

	'use strict';

	function Lang(controller) {
		Lang.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('langs');
		var en = ViewUtil.buildContainer('lang en');
		ClickUtil.listen(en, controller.goEn, controller);
		this.container.appendChild(en);
		var fr = ViewUtil.buildContainer('lang fr');
		ClickUtil.listen(fr, controller.goFr, controller);
		this.container.appendChild(fr);
	}

	ObjectUtil.inherit(Lang, AbstractView);

	return Lang;

})();

