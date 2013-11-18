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
      firstPageTile: 'Welcome in Panic Backlog !',
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
      githubPageRetainToken: 'Save my token for next times',
      githubPageBack: 'Back',
      /****************************\
      |**** CHOOSE BONUS POPUP ****|
      \****************************/
      chooseBonusPopupTitle: 'Choose a bonus !',
      chooseBonusPopupBacklogCardsPP: 'Your tasks can have 1 sup card before blowup',
      chooseBonusPopupEmptyBacklog: 'By clicking you empty your tasks',
      chooseBonusPopupCardTimeMM: 'Divide by 2 all cards\' time in game (not in tasks)',
      chooseBonusPopupNewDev: 'Active the next dev in your team',
      chooseBonusPopupNewTask: 'Active the next task in the first dev who have empty task',
      chooseBonusPopupLifePP: 'Add a life in your lifes\'',
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
      firstPageTile: 'Bienvenu dans Panic Backlog !',
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
      githubPageRetainToken: 'Enregistrer mon token pour la prochaine fois',
      githubPageBack: 'Retour',
      /****************************\
      |**** CHOOSE BONUS POPUP ****|
      \****************************/
      chooseBonusPopupTitle: 'Choisis un bonus !',
      chooseBonusPopupBacklogCardsPP: 'Vous pouvez avoir 1 carte de plus dans vos tâches avant de mourir',
      chooseBonusPopupEmptyBacklog: 'En cliquant vous videz vos tâches',
      chooseBonusPopupCardTimeMM: 'Divise par 2 le temps de toutes les cartes en jeu (pas dans vos tâches)',
      chooseBonusPopupNewDev: 'Active le 1er dev, non actif, dans votre équipe',
      chooseBonusPopupNewTask: 'Active 1 tâche dans le 1er dev qui a une tâche non active',
      chooseBonusPopupLifePP: 'Ajoute une nouvelle vie',
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