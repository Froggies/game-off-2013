var AudioUtil = (function() {

  'use strict';

  var audioPlayers = {};
  var isEnable = true;
  var lastSongPlayed = 'accueil';
  var songs = ['click', 'money', 'levelup', 'bonusReady', 'sprint', 'keyboard', 'loose', 'accueil', 'end', 'inGame'];

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
    return a;
  }

  function startSong(player, loop, optSuffixe) {
    if(isEnable === true && AudioUtil.canBeEnable() === true) {
      var name = player;
      if(optSuffixe !== undefined) {
        name = name + optSuffixe;
      }
      if(audioPlayers[name] === undefined) {
        audioPlayers[name] = buildAudioPlayer(player);
      }
      if(loop === true) {
        audioPlayers[name].loop = true;
      }
      audioPlayers[name].time = 0;
      audioPlayers[name].play();
    }
  }

  function stopSong(player, optSuffixe) {
    var name = player;
    if(optSuffixe !== undefined) {
      name = name + optSuffixe;
    }
    if(audioPlayers[name] !== undefined) {
      audioPlayers[name].pause();
    }
  }

  function loadAllSongs() {
    _.each(songs, function(song) {
      buildAudioPlayer(song);
    });
  }

  return {

    disable: function() {
      if(AudioUtil.canBeEnable() === true) {
        for(var key in audioPlayers) {
          audioPlayers[key].pause();
        }
      }
      isEnable = false;
    },
    enable: function() {
      isEnable = true;
      startSong(lastSongPlayed, true);
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
    keyboard: function(index) {
      startSong('keyboard', false, index);
    },
    keyboardStop: function(index) {
      stopSong('keyboard', index);
    },
    loose: function() {
      startSong('loose');
    },
    accueil: function() {
      AudioUtil.endStop();
      AudioUtil.inGameStop();
      lastSongPlayed = 'accueil';
      startSong('accueil', true);
    },
    accueilStop: function() {
      stopSong('accueil');
    },
    end: function() {
      AudioUtil.accueilStop();
      AudioUtil.inGameStop();
      lastSongPlayed = 'end';
      startSong('end', true);
    },
    endStop: function() {
      stopSong('end');
    },
    inGame: function() {
      AudioUtil.accueilStop();
      AudioUtil.endStop();
      lastSongPlayed = 'inGame';
      startSong('inGame', true);
    },
    inGameStop: function() {
      stopSong('inGame');
    },
    loadAllSongs: function() {
      loadAllSongs();
    }

  };

})();