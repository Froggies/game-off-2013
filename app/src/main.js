window.onload = function() {

  var globalContainer = document.getElementById('globalContainer');

  var page = new PageController(globalContainer);
  page.start(globalContainer);

  if(CompatibilityUtil.isCompatible() === false) {
    page.showCompatibilityPage();
  }

  var audioManager = ViewUtil.buildButton('Audio', function() {
    if(AudioUtil.isEnable() === true) {
      AudioUtil.disable();
      ViewUtil.removeClassName(audioManager, 'active');
    } else if(AudioUtil.canBeEnable()) {
      AudioUtil.enable();
      ViewUtil.addClassName(audioManager, 'active');
    }
  });
  ViewUtil.addClassName(audioManager, 'audio');
  if(AudioUtil.canBeEnable() === true) {
    ViewUtil.addClassName(audioManager, 'active');
  } else {
    AudioUtil.disable();
  }
  document.getElementsByTagName('body')[0].appendChild(audioManager);

  AudioUtil.playMoney();
  TimeoutUtil.timeout(function() {
    AudioUtil.stopMoney();
    AudioUtil.playLevelUp();
  }, 2000);

};