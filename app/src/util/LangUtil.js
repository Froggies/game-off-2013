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
      firstPageHelp: 'Help',
      firstPageStart: 'Start',
      /****************************\
      |******** HELP  PAGE ********|
      \****************************/
      helpPageTitle: 'Help',
      helpGame1: 'Tasks are delivered in right.',
      helpGame2: 'Drag&Drop it on free dev.',
      helpGame3: 'When you have enought level, you can employ new dev.',
      helpGame4: 'And you can affect task to him.',
      helpGame5: 'After some times, you can choose a bonus.',
      helpGame6: 'To show detail bonus, click on the i (infos) button.',
      helpGame7: 'To hide detail, click on x button.',
      helpGame8: 'Finally to choose a bonus, click on it.',
      helpGame9: 'To use a bonus, click on it, in the header of game.',
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
      githubPageHelp: 'Help',
      githubPageRetainToken: 'Save my token for next times',
      helpGithub1: 'When you are connected on github, go in account settings (top right corner).',
      helpGithub2: 'Go in applications menu.',
      helpGithub3: 'Click on create new token button (in personal access tokens section).',
      helpGithub4: 'Enter a name.',
      helpGithub5: 'Copy the token, and then paste it into the app.',
      githubPageHaveToken: 'I have my github token',
      githubPageNoAccount: 'I haven\'t github account',
      githubPageBack: 'Back',
      /****************************\
      |******** HELP COMPO ********|
      \****************************/
      next: 'Next',
      prev: 'Previous',
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
      chooseBonusPopupClose: 'No thanks !',
      /****************************\
      |********* BUBBLES **********|
      \****************************/
      resignSentences: ['By by amigo !', 'I go work for github !', 'Microsoft\'s job is better than here !']
    },
    fr: {
      /****************************\
      |******** FIRST PAGE ********|
      \****************************/
      firstPageHelp: 'Aide',
      firstPageStart: 'Démarrer',
      /****************************\
      |******** HELP  PAGE ********|
      \****************************/
      helpPageTitle: 'Aide',
      helpGame1: 'Les tâches apparaissent à droite.',
      helpGame2: 'Drag&Drop les sur un développeur libre.',
      helpGame3: 'Quand ton niveau le permet, tu peux engager un nouveau dev.',
      helpGame4: 'Et tu peux lui affecter de nouvelles tâches.',
      helpGame5: 'Arpès un certains temps tu peux avoir un bonus',
      helpGame6: 'Pour voir ce que fait un bonus, click sur le i (infos).',
      helpGame7: 'Pour fermer les détails, click sur x.',
      helpGame8: 'Finallement choisis un bonus en clickant dessus.',
      helpGame9: 'Pour utiliser un bonus, click dessus, dans le haut du jeu.',
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
      githubPageHelp: 'Aide',
      githubPageRetainToken: 'Enregistrer mon token pour la prochaine fois',
      helpGithub1: 'Lorsque vous êtes connecté à github, allez dans les options de votre compte (en haut à droite).',
      helpGithub2: 'Allez dans le menu des applications.',
      helpGithub3: 'Clickez sur le button "create new token" (dans la section "personal access tokens").',
      helpGithub4: 'Entrez un nom.',
      helpGithub5: 'Copiez le token, et collez le dans notre app.',
      githubPageHaveToken: 'Ok j\'ai mon token',
      githubPageNoAccount: 'J\'ai pas de compte github !',
      githubPageBack: 'Retour',
      /****************************\
      |******** HELP COMPO ********|
      \****************************/
      next: 'Suivant',
      prev: 'Précédent',
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
      chooseBonusPopupClose: 'Non merci !',
      /****************************\
      |********* BUBBLES **********|
      \****************************/
      resignSentences: ['Trop de tâches, je démissione !', 'C\'est pas possible cette boite, ciao.', 'Je m\'en fou de tes tâches, je me barre !', 'Complètement null à chier ce job, je vais vori ailleurs']
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