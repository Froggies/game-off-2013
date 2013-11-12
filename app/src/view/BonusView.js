var BonusView = (function() {

	'use strict';

	function Bonus(controller) {
		Bonus.parent.constructor.apply(this, arguments);
		this.container = ViewUtil.buildContainer('bonus');
	}

	ObjectUtil.inherit(Bonus, AbstractView);

	return Bonus;

})();

