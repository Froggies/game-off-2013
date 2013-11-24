var Constants = {
  FPS: 2000,//loop time when game start, in msc
  FPS_MIN: 500,//loop time min, in msc
  NB_COLUMNS: 5,
  NB_ROWS: 5,
  NB_CARDS_IN_BACKLOG_MAX: 15,
  NB_LIFE: 3,
  NB_BONUS: 6,
  CARD_TYPE: [
    'bug', 'feature', 'ie', 'options', 'css', 'db', 'sql', 'api', 'config',
    'merge', 'mobile', 'native', 'ff', 'email', 'phone', 'meeting'
  ],
  CARD_COMPLEXITY: [0, 0.5, 1, 2, 3, 5, 8, 13],//, 21, 50, 100]
  TEAMS: ['classic', 'froggies', 'github'],
  //moved into backlog.less CARD_BACKLOG_TOP_BY: 0.55,//speed of cards in backlog, greater is speeder
  SCORE_TIME_SHOW: 10,//show +1 score every msc
  SCORE_FACTOR: 86.56,//display big score (score * factor)
  NB_LVL_BONUS: 3,//each nb level display bonus popup 
  NB_TASK_BEFORE_RESIGN: 20,//after x, the dev can resign
  NB_LUCK_RESIGN: 8,//1 luck on x to resign (after x tasks)
  NB_LVL_END: 1//after x level the game was finish
};