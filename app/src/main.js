window.onload = function() {

	var globalContainer = document.getElementById('globalContainer');

	var page = new PageController(globalContainer);
	page.start(globalContainer);

};