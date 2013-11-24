var AudioUtil = (function() {

  'use strict';

  var audioPlayers = {};
  var isEnable = true;

  function buildAudioPlayer(name) {
    var a = document.createElement('audio');
    var s = document.createElement('source');
    s.src = 'assets/audio/'+name+'.wav';
    s.type = 'audio/wav';
    a.appendChild(s);
    s = document.createElement('source');
    s.src = 'assets/audio/'+name+'.mp3';
    s.type = 'audio/mpeg';
    a.appendChild(s);
    s = document.createElement('source');
    s.src = 'assets/audio/'+name+'.ogg';
    s.type = 'audio/ogg';
    a.appendChild(s);
    a.load();
    audioPlayers[name] = a;
  }

  function startSong(player) {
    if(isEnable === true) {
      if(audioPlayers[player] === undefined) {
        buildAudioPlayer(player);
      }
      audioPlayers[player].time = 0;
      audioPlayers[player].play();
    }
  }

  function stopSong(player) {
    if(audioPlayers[player] !== undefined) {
      audioPlayers[player].pause();
    }
  }

  return {

    disable: function() {
      for(var key in audioPlayers) {
        audioPlayers[key].pause();
      }
      isEnable = false;
    },
    enable: function() {
      isEnable = true;
    },
    isEnable: function() {
      return isEnable;
    },
    canBeEnable: function() {
      return false;/*
      return CompatibilityUtil.hasAudioMp3() || 
        CompatibilityUtil.hasAudioWav() || 
        CompatibilityUtil.hasAudioOgg();*/
    },
    playMoney: function() {
      startSong('money');
    },
    stopMoney: function() {
      stopSong('money');
    },
    playLevelUp: function() {
      startSong('levelUp');
    }

  };

})();