window.onload = function() {

  var globalContainer = document.getElementById('globalContainer');

  var page = new PageController(globalContainer);
  page.start(globalContainer);

  if(CompatibilityUtil.isCompatible() === false) {
    page.showCompatibilityPage();
  }

  var audioManager = ViewUtil.buildButton('', '', function() {
    if(AudioUtil.isEnable() === true) {
      AudioUtil.disable();
      ViewUtil.removeClassName(audioManager, 'active');
    } else if(AudioUtil.canBeEnable()) {
      AudioUtil.enable();
      ViewUtil.addClassName(audioManager, 'active');
    }
  });
  ViewUtil.removeClassName(audioManager, 'btn');
  ViewUtil.addClassName(audioManager, 'audio');
  if(AudioUtil.canBeEnable() === true) {
    ViewUtil.addClassName(audioManager, 'active');
    //load all songs (in songs array on top of this class) at start 
    AudioUtil.loadAllSongs();
  } else {
    AudioUtil.disable();
  }
  document.getElementsByTagName('body')[0].appendChild(audioManager);

};