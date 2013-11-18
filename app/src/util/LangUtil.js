var LangUtil = (function() {

  'use strict';

  var currentLang = navigator.language.substring(0,2);
  var potentialLang = window.location.hash.substring(1);
  if(potentialLang === 'en') {
    currentLang = 'en';
  } else if(potentialLang === 'fr') {
    currentLang = 'fr';
  }
  if(currentLang === undefined || currentLang === null) {
    currentLang = 'en';
  }
  if(currentLang !== 'en' && currentLang !== 'fr') {
    currentLang = 'en';
  }

  var lang = {
    en: {
      /****************************\
      |******** FIRST PAGE ********|
      \****************************/
      firstPageTile: 'Welcome in the Game !',
      firstPageDescription: 'You are a tyrannical project chief and you have to affect tasks to your developpers. You have to make evolve your team, to cope with change, to treat a large amount of tasks, before the backlog blows up.',
      firstPageHelp: 'Help',
      firstPageStart: 'Start',
      /****************************\
      |******** HELP  PAGE ********|
      \****************************/
      helpPageTitle: 'Help',
      helpPageBack: 'Back',
      /****************************\
      |***** CHOOSE USER PAGE *****|
      \****************************/
      chooseUserPageTitle: 'Choose your player !',
      chooseUserPageBack: 'Back',
      /****************************\
      |***** GITHUB USER PAGE *****|
      \****************************/
      githubPageTitle: 'Github !',
      githubPageToken: 'Token',
      githubPageBack: 'Back',
      /****************************\
      |**** CHOOSE BONUS POPUP ****|
      \****************************/
      chooseBonusPopupTitle: 'Choose a bonus !',
      /****************************\
      |******* PAUSE  POPUP *******|
      \****************************/
      pausePopupTitle: 'Pause',
      pausePopupSentence: 'Seriously ? You think business can take a break ?',
      pausePopupClose: 'Ok',
      /****************************\
      |********* BACKLOG **********|
      \****************************/
      backlog: 'Tasks',
      chooseBonusPopupClose: 'No thanks !'
    },
    fr: {
      /****************************\
      |******** FIRST PAGE ********|
      \****************************/
      firstPageTile: 'Bienvenu dans le jeu !',
      firstPageDescription: 'Tu es un chef de projet tyranique et tu dois affecter des tâches à tes développeurs. Tu dois faire évoluer ton équipe, pour faire face au changement, pour traiter un très grand nombre de tâches, avant que le backlog ne déborde.',
      firstPageHelp: 'Aide',
      firstPageStart: 'Démarrer',
      /****************************\
      |******** HELP  PAGE ********|
      \****************************/
      helpPageTitle: 'Aide',
      helpPageBack: 'Retour',
      /****************************\
      |***** CHOOSE USER PAGE *****|
      \****************************/
      chooseUserPageTitle: 'Choisis ton joueur !',
      chooseUserPageBack: 'Retour',
      /****************************\
      |***** GITHUB USER PAGE *****|
      \****************************/
      githubPageTitle: 'Github !',
      githubPageToken: 'Token',
      githubPageBack: 'Retour',
      /****************************\
      |**** CHOOSE BONUS POPUP ****|
      \****************************/
      chooseBonusPopupTitle: 'Choisis un bonus !',
      /****************************\
      |******* PAUSE  POPUP *******|
      \****************************/
      pausePopupTitle: 'Pause',
      pausePopupSentence: 'Sérieusement ? Tu penses que le business peut prendre une pause ?',
      pausePopupClose: 'D\'accord !',
      /****************************\
      |********* BACKLOG **********|
      \****************************/
      backlog: 'Tâches',
      chooseBonusPopupClose: 'Non merci !'
    }
  };

  return {

    get: function(key) {
      return lang[currentLang][key];
    },
    changeLang: function(lang) {
      currentLang = lang;
    }

  };

})();