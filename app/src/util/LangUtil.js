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
      firstPageCredits: 'Credits',
      /****************************\
      |******** HELP  PAGE ********|
      \****************************/
      helpPageTitle: 'Help',
      helpGame1: 'Tasks are delivered in right.',
      helpGame2: 'Drag&Drop it on free dev.',
      helpGame3: 'On drop the dev can work.',
      helpGame4: 'When you have enought level, you can employ new dev.',
      helpGame5: 'And you can affect task to him.',
      helpGame6: 'After some times, you can choose a bonus.',
      helpGame7: 'To use a bonus, click on it, in the header of game.',
      helpGame8: 'When your tasks blowup, you loose a life.',
      helpGame9: 'At any time, your dev can resign !',
      helpPageBack: 'Back',
      /****************************\
      |**** COMPATIBILITY PAGE ****|
      \****************************/
      compatibilityPageTitle: 'Compatibility',
      compatibilityPageNoCompatible: 'TODO - translate : Nous sommes désolé mais votre navigateur ne vous permet pas de jouer ! S\'il vous plait mettez le à jour où changez en !',
      compatibilityPageNoFullCompatible: 'TODO - translate : Vous n\'êtes pas complètement compatible, mais vous pouvez jouer quand même !',
      compatibilityPageBack: 'Back',
      compatibilityPageTryBack: 'Try anyway',
      compatibilityDdDescription: 'All game is based on this system !',
      compatibilityCssTransitionDescription: 'All game is based on this system !',
      compatibilityAjaxDescription: 'You can\'t play your github account !',
      compatibilityLocalStorageDescription: 'You can\'t store your github token',
      compatibilityMp3Description: 'You can\'t play mp3 songs !',
      compatibilityWavDescription: 'You can\'t play wav songs !',
      compatibilityOggDescription: 'You can\'t play ogg songs !',
      /****************************\
      |***** CHOOSE USER PAGE *****|
      \****************************/
      chooseUserPageTitle: 'Select your team !',
      chooseUserPageBack: 'Back',
      /****************************\
      |***** GITHUB USER PAGE *****|
      \****************************/
      githubPageTitle: 'Github !',
      githubPageToken: 'Token',
      githubPageHelp: 'Help',
      githubPageRetainToken: 'Save my token for next times',
      githubPageNoAjax: 'Your browser has not ajax, so you can not use github account !',
      githubPageNoLocalStorage: 'Your browser does not support LocalStorage',
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
      chooseBonusPopupTitle: 'Active a bonus !',
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
      |********* SPRINT ***********|
      \****************************/
      sprint: 'Month',
      sprint1: 'The birth...',
      sprint2: 'The start-up...',
      sprint3: 'The emergence...',
      sprint4: 'The revelation...',
      sprint5: 'The revolution...',
      sprint6: 'The wealth...',
      /****************************\
      |********* COLUMNS **********|
      \****************************/
      columnRecruit: 'Recruit !',
      columnUpgrade: 'Upgrade !',
      /****************************\
      |****** CREDITS PAGE ********|
      \****************************/
      creditsPageSentence: 'Panic Backlog was realised for the GitHub Game Off 2013',
      creditsPageAchievement: 'Achievement',
      creditsPageArt: 'Artwork',
      creditsPageTechno: 'Techno',
      creditsPageTool: 'Tools',
      creditsPageOnlineTool: 'Web Tools',
      creditsPageThx: 'Thanks',
      creditsPageAudreySentence: 'I\'m the <br /> devOps',//br to be consistent in en and fr (so long)
      creditsPageLaurentSentence: 'I\'m the cogniticien',
      creditsPageRomainSentence: 'I\'m the dev',
      creditsPageBack: 'Back',
      /****************************\
      |********* BUBBLES **********|
      \****************************/
      resignSentences: ['By by amigo !', 'I go work for github !', 'Microsoft\'s job is better than here !'],
      /****************************\
      |********* END GAME *********|
      \****************************/
      endTitle: 'You finish the game !',
      endContent: 'Yes in this game there are no winner/no looser every players learn ! We hope you have learn, how the old project method is borry ! If no, please replay. Else you can learn more on agile methods.',
      endBack: 'Menu',
      endReplayButton: 'Play Again !',
      endAgileButton: 'Agile manifest'
    },
    fr: {
      /****************************\
      |******** FIRST PAGE ********|
      \****************************/
      firstPageHelp: 'Aide',
      firstPageStart: 'Démarrer',
      firstPageCredits: 'Crédits',
      /****************************\
      |******** HELP  PAGE ********|
      \****************************/
      helpPageTitle: 'Aide',
      helpGame1: 'Les tâches apparaissent à droite.',
      helpGame2: 'Drag&Drop les sur un développeur libre.',
      helpGame3: 'Lorsque tu poses une tâche sur un développeur, il se met au boulot.',
      helpGame4: 'Quand ton niveau le permet, tu peux engager un nouveau dev.',
      helpGame5: 'Et tu peux lui affecter de nouvelles tâches.',
      helpGame6: 'Après un certains temps tu peux avoir un bonus',
      helpGame7: 'Pour utiliser un bonus, clic dessus, dans le haut du jeu.',
      helpGame8: 'Quand tu as trop de tâches, tu perd une vie.',
      helpGame9: 'A tout moment tes développeurs peuvent démissioner !',

      helpPageBack: 'Retour',
      /****************************\
      |**** COMPATIBILITY PAGE ****|
      \****************************/
      compatibilityPageTitle: 'Compatibilité',
      compatibilityPageNoCompatible: 'Nous sommes désolé mais votre navigateur ne vous permet pas de jouer ! S\'il vous plait mettez le à jour où changez en !',
      compatibilityPageNoFullCompatible: 'Vous n\'êtes pas complètement compatible, mais vous pouvez jouer quand même !',
      compatibilityPageBack: 'Retour',
      compatibilityPageTryBack: 'Essayer quand même',
      compatibilityDdDescription: 'Tout le jeu est basé sur le Drag&Drop !',
      compatibilityCssTransitionDescription: 'Tout le jeu est basé sur les transitions css !',
      compatibilityAjaxDescription: 'Vous ne pouvez pas joué avec votre compte github !',
      compatibilityLocalStorageDescription: 'Vous ne pouvez pas sauvé votre token github !',
      compatibilityMp3Description: 'Vous ne pouvez pas écouté le son au format mp3 !',
      compatibilityWavDescription: 'Vous ne pouvez pas écouté le son au format wav !',
      compatibilityOggDescription: 'Vous ne pouvez pas écouté le son au format ogg !',
      /****************************\
      |***** CHOOSE USER PAGE *****|
      \****************************/
      chooseUserPageTitle: 'Choisis ton équipe !',
      chooseUserPageBack: 'Retour',
      /****************************\
      |***** GITHUB USER PAGE *****|
      \****************************/
      githubPageTitle: 'Github !',
      githubPageToken: 'Token',
      githubPageHelp: 'Aide',
      githubPageRetainToken: 'Enregistrer mon token pour la prochaine fois',
      githubPageNoAjax: 'Votre navigateur ne supporte pas ajax, vous ne pouvez pas vous connecter avec votre compte github !',
      githubPageNoLocalStorage: 'Votre navigateur ne supporte pas le LocalStorage',
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
      chooseBonusPopupTitle: 'Active un bonus !',
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
      |********* SPRINT ***********|
      \****************************/
      sprint: 'Mois',
      sprint1: 'La naissance...',
      sprint2: 'La start-up...',
      sprint3: 'L\'émergence...',
      sprint4: 'La révélation...',
      sprint5: 'La révolution...',
      sprint6: 'La richesse...',
      /****************************\
      |********* COLUMNS **********|
      \****************************/
      columnRecruit: 'Recruter !',
      columnUpgrade: 'Améliorer !',
      /****************************\
      |****** CREDITS PAGE ********|
      \****************************/
      creditsPageSentence: 'Panic Backlog a été réalisé pour le concours GitHub Game Off 2013',
      creditsPageAchievement: 'Réalisation',
      creditsPageTechno: 'Techno',
      creditsPageArt: 'Artwork',
      creditsPageLanguage: 'Langages',
      creditsPageTool: 'Outils',
      creditsPageOnlineTool: 'Outils Web',
      creditsPageThx: 'Remerciement',
      creditsPageAudreySentence: 'Je suis la devOps',
      creditsPageLaurentSentence: 'Je suis le cogniticien',
      creditsPageRomainSentence: 'Je suis le dev',
      creditsPageBack: 'Retour',
      /****************************\
      |********* BUBBLES **********|
      \****************************/
      resignSentences: ['Trop de tâches, je démissione !', 'C\'est pas possible cette boite, ciao.', 'Je m\'en fou de tes tâches, je me barre !', 'Complètement null à chier ce job, je vais vori ailleurs'],
      /****************************\
      |********* END GAME *********|
      \****************************/
      endTitle: 'Vous avez fini le jeu !',
      endContent: 'Oui dans ce jeu il n\'y a ni gagnant, ni perdant : tous les joueurs apprennent ! Nous espérons que vous avez appris que gérer un projet de cette façon est très fastidieux et ennuyeux ! Si ce n\'est pas le cas, s\'il vous rejouer ! Sinon vous pouvez en apprendre plus sur les méthodes agiles.',
      endBack: 'Menu',
      endReplayButton: 'Rejouer !',
      endAgileButton: 'Manifeste agile'
    }
  };

  return {

    get: function(key) {
      return lang[currentLang][key];
    },
    changeLang: function(lang) {
      currentLang = lang;
    },
    getCurrentLang: function() {
      return currentLang;
    }

  };

})();