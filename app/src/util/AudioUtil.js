var AudioUtil = (function() {

  'use strict';

  var audioPlayers = {};
  var isEnable = true;

  function buildAudioPlayer(name, loop) {
    var a = document.createElement('audio');
    if(loop === true) {
      a.loop = true;
    }
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

  function startSong(player, loop) {
    if(isEnable === true) {
      if(audioPlayers[player] === undefined) {
        buildAudioPlayer(player, loop);
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
      return CompatibilityUtil.hasAudioMp3() || 
        CompatibilityUtil.hasAudioWav() || 
        CompatibilityUtil.hasAudioOgg();
    },
    click: function() {
      startSong('click');
    },
    money: function() {
      startSong('money');
    },
    moneyStop: function() {
      stopSong('money');
    },
    levelUp: function() {
      startSong('levelup');
    },
    bonusReady: function() {
      startSong('bonusReady');
    },
    sprint: function() {
      startSong('sprint');
    },
    keyboard: function() {
      startSong('keyboard');
    },
    keyboardStop: function() {
      stopSong('keyboard');
    },
    loose: function() {
      startSong('loose');
    },
    accueil: function() {
      AudioUtil.endStop();
      AudioUtil.inGameStop();
      startSong('accueil', true);
    },
    accueilStop: function() {
      stopSong('accueil');
    },
    end: function() {
      AudioUtil.accueilStop();
      AudioUtil.inGameStop();
      startSong('end', true);
    },
    endStop: function() {
      stopSong('end');
    },
    inGame: function() {
      AudioUtil.accueilStop();
      AudioUtil.endStop();
      startSong('inGame', true);
    },
    inGameStop: function() {
      stopSong('inGame');
    }

  };

})();