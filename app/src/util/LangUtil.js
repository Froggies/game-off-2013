var LangUtil = (function() {

  'use strict';
  var currentLang, potentialLang;
  try {
    currentLang = navigator.language.substring(0,2);
    potentialLang = window.location.hash.substring(1);
  } catch(e) {
    currentLang = 'en';
    potentialLang = 'en';
  }
  
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
      helpGame1: 'Tasks are delivered at the right of your screen.',
      helpGame2: 'Drag&Drop a card on a free dev.',
      helpGame3: 'When you drop a card, the dev starts to work.',
      helpGame4: 'When your level allow it, you can employ new dev.',
      helpGame5: 'And you can affect tasks to him.',
      helpGame6: 'After some times, you can choose a bonus.',
      helpGame7: 'To use a bonus, click on it, in the header of the game.',
      helpGame8: 'When you have to much tasks, you loose a life.',
      helpGame9: 'At any time, your dev can quit !',
      helpPageBack: 'Back',
      /****************************\
      |**** COMPATIBILITY PAGE ****|
      \****************************/
      compatibilityPageTitle: 'Compatibility',
      compatibilityPageNoCompatible: 'We are sorry, but your browser doesn\'t allow you to play ! Please upgrade it or change it !',
      compatibilityPageNoFullCompatible: 'Your browser is not fully compatible with the game, but you can still play !',
      compatibilityPageBack: 'Back',
      compatibilityPageTryBack: 'Try anyway',
      compatibilityDdDescription: 'All the game is based on this system !',
      compatibilityCssTransitionDescription: 'All the game is based on this system !',
      compatibilityClassListDescription: 'All the game is based on this system !',
      compatibilityAjaxDescription: 'You can\'t play with your github account !',
      compatibilityLocalStorageDescription: 'You can\'t store your github token',
      compatibilityMp3Description: 'You can\'t play mp3 songs !',
      compatibilityWavDescription: 'You can\'t play wav songs !',
      compatibilityOggDescription: 'You can\'t play ogg songs !',
      compatibilityNavigatorLanguageDescription: 'Game can\'t select your language !',
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
      githubPageRetainToken: 'Save my token for the next time',
      githubPageNoAjax: 'Your browser has not ajax, so you can\'t use your github account !',
      githubPageNoLocalStorage: 'Your browser does not support LocalStorage',
      helpGithub1: 'When you are connected on github, go to account settings (top right corner).',
      helpGithub2: 'Go in applications menu.',
      helpGithub3: 'Click on create new token button (in personal access tokens section).',
      helpGithub4: 'Enter a name.',
      helpGithub5: 'Copy the token, and then paste it into the app.',
      githubPageHaveToken: 'I have my github token',
      githubPageNoAccount: 'I haven\'t a github account',
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
      chooseBonusPopupBacklogCardsPP: 'You can increase the size of your list task.',
      chooseBonusPopupEmptyBacklog: 'By clicking you empty your list task',
      chooseBonusPopupCardTimeMM: 'Divide by 2 all cards\' time that are in the game (not the one in the list task)',
      chooseBonusPopupNewDev: 'Active the next dev in your team',
      chooseBonusPopupNewTask: 'Active the next task in the first dev who have empty tasks',
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
      columnRecruit: 'Hire !',
      columnUpgrade: 'Upgrade !',
      /****************************\
      |****** CREDITS PAGE ********|
      \****************************/
      creditsPageSentence: 'Panic Backlog was realised for the GitHub Game Off 2013',
      creditsPageAchievement: 'Achievement',
      creditsPageArt: 'Artwork',
      creditsPageTechno: 'Technos',
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
      resignSentences: ['By by amigo !', 'I\'m going to work for github !', 'Microsoft\'s job is better than here !'],
      /****************************\
      |********* END GAME *********|
      \****************************/
      endTitle: 'You\'ve ended the game !',
      endContent: 'Yes in this game there is no winner/no loser every player learn ! We hope that you have learned how much is boring to hold a project with this method ! If it\'s not, please replay. Else you can learn more on agile methods.',
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
      helpGame6: 'Après un certain temps tu peux avoir un bonus',
      helpGame7: 'Pour utiliser un bonus, cliques dessus, dans le haut du jeu.',
      helpGame8: 'Quand tu as trop de tâches, tu perds une vie.',
      helpGame9: 'A tout moment tes développeurs peuvent démissioner !',

      helpPageBack: 'Retour',
      /****************************\
      |**** COMPATIBILITY PAGE ****|
      \****************************/
      compatibilityPageTitle: 'Compatibilité',
      compatibilityPageNoCompatible: 'Nous sommes désolés mais votre navigateur ne vous permet pas de jouer ! S\'il te plaît mets le à jour ou changes en !',
      compatibilityPageNoFullCompatible: 'Ton navigateur n\'est pas complètement compatible, mais tu peux jouer quand même !',
      compatibilityPageBack: 'Retour',
      compatibilityPageTryBack: 'Essayer quand même',
      compatibilityDdDescription: 'Tout le jeu est basé sur le Drag&Drop !',
      compatibilityClassListDescription: 'Tout le jeu est basé sur les listes de class !',
      compatibilityCssTransitionDescription: 'Tout le jeu est basé sur les transitions css !',
      compatibilityAjaxDescription: 'Tu ne peux pas jouer avec ton compte github !',
      compatibilityLocalStorageDescription: 'Tu ne peux pas sauver ton token github !',
      compatibilityMp3Description: 'Tu ne peux pas écouter le son au format mp3 !',
      compatibilityWavDescription: 'Tu ne peux pas écouter le son au format wav !',
      compatibilityOggDescription: 'Tu ne peux pas écouter le son au format ogg !',
      compatibilityNavigatorLanguageDescription: 'Le jeu ne peut pas sélectionner ta langue !',
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
      githubPageNoAjax: 'Ton navigateur ne supporte pas Ajax, tu ne peux pas te connecter avec ton compte github !',
      githubPageNoLocalStorage: 'Ton navigateur ne supporte pas le LocalStorage',
      helpGithub1: 'Lorsque tu es connecté à github, vas dans les options de ton compte (en haut à droite).',
      helpGithub2: 'Vas dans le menu des applications.',
      helpGithub3: 'Cliques sur le button "create new token" (dans la section "personal access tokens").',
      helpGithub4: 'Entres un nom.',
      helpGithub5: 'Copies le token, et colles le dans notre app.',
      githubPageHaveToken: 'Ok j\'ai mon token',
      githubPageNoAccount: 'Je n\'ai pas de compte github !',
      githubPageBack: 'Retour',
      /****************************\
      |******** HELP COMPO ********|
      \****************************/
      next: 'Suivant',
      prev: 'Précédent',
      /****************************\
      |**** CHOOSE BONUS POPUP ****|
      \****************************/
      chooseBonusPopupTitle: 'Actives un bonus !',
      chooseBonusPopupBacklogCardsPP: 'Tu peux avoir 1 carte de plus dans tes tâches avant de mourir',
      chooseBonusPopupEmptyBacklog: 'En cliquant tu vides tes tâches',
      chooseBonusPopupCardTimeMM: 'Divises par 2 le temps de toutes les cartes en jeu (pas dans tes tâches)',
      chooseBonusPopupNewDev: 'Actives le 1er dev, non actif, dans ton équipe',
      chooseBonusPopupNewTask: 'Actives 1 tâche dans le 1er dev qui a une tâche non active',
      chooseBonusPopupLifePP: 'Ajoutes une nouvelle vie',
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
      creditsPageTechno: 'Technos',
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
      resignSentences: ['Trop de tâches, je démissione !', 'C\'est pas possible cette boite, ciao.', 'Je m\'en fou de tes tâches, je me barre !', 'Complètement nul à chier ce job, je vais voir ailleurs'],
      /****************************\
      |********* END GAME *********|
      \****************************/
      endTitle: 'Vous avez fini le jeu !',
      endContent: 'Oui dans ce jeu il n\'y a ni gagnant, ni perdant : tous les joueurs apprennent ! Nous espérons que tu as appris que gérer un projet de cette façon est très fastidieux et ennuyeux ! Si ce n\'est pas le cas, n\'hésites pas à rejouer ! Sinon tu peux en apprendre plus sur les méthodes agiles.',
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