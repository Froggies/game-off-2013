window.onload = function() {

  var globalContainer = document.getElementById('globalContainer');

  var page = new PageController(globalContainer);
  page.start(globalContainer);

  if(CompatibilityUtil.isCompatible() === false) {
    page.showCompatibilityPage();
  }

  AudioUtil.playMoney();
  TimeoutUtil.timeout(function() {
    AudioUtil.stopMoney();
    AudioUtil.playLevelUp();
  }, 2000);

};