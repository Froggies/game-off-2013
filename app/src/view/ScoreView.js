var ScoreView = (function() {

  'use strict';

  function Score(controller) {
    Score.parent.constructor.apply(this, arguments);
    this.container = ViewUtil.buildContainer('score');
    this.containerScore = ViewUtil.buildContainer('dollar');
    this.container.appendChild(this.containerScore);
    this.containerLevel = ViewUtil.buildContainer('level');
    this.container.appendChild(this.containerLevel);
    this.containerLife = ViewUtil.buildContainer('life');
    this.container.appendChild(this.containerLife);
    for (var i = 0; i < Constants.NB_LIFE; i++) {
      if(this.controller.nbLife >= i) {
        this.containerLife.appendChild(ViewUtil.buildContainer('active')).innerHTML = '+';
      } else {
        this.containerLife.appendChild(ViewUtil.buildContainer('inactive')).innerHTML = '+';
      }
    }
    this.tempScore = 0;
    this.levelNextFactor = 1;
    this.gauge = ViewUtil.buildContainer('gauge gaugeLevel');
    this.gaugePercentage = ViewUtil.buildContainer('');
    this.gauge.appendChild(this.gaugePercentage);
    this.container.appendChild(this.gauge);
    this.updateLevel();
  }

  ObjectUtil.inherit(Score, AbstractView);

  Score.prototype.draw = function(element) {
    element.appendChild(this.container);
    this.containerScore.innerHTML = '0 $';
  };

  Score.prototype.updateScore = function() {
    AudioUtil.money();
    if(this.scoreInterval === undefined) {
      this.scoreInterval = TimeoutUtil.interval(function() {
        this.tempScore = this.tempScore + 1;
        if(this.tempScore <= this.controller.score) {
          this.containerScore.innerHTML = this.tempScore + ' $';
        }
        if(this.tempScore >= this.controller.score) {
          window.clearInterval(this.scoreInterval);
          this.scoreInterval = undefined;
          AudioUtil.moneyStop();
        }
      }, Constants.SCORE_TIME_SHOW, this);
    }
  };

  Score.prototype.updateLife = function() {
    var index = 0;
    _.each(this.containerLife.children, function(element) {
      if(this.controller.nbLife > index) {
        element.className = 'active';
      } else {
        element.className = 'inactive';
      }
      index = index + 1;
    }, this);
  };

  var buildLevelSpan = function buildLevelSpan(nb) {
    if(nb >= 10) {
      return buildLevelSpan(Math.floor(nb/10)) + buildLevelSpan(nb%10);
    } else {
      var res = [
        '<span class="number number',
        nb,
        '"></span>'
      ].join('');
      return res;
    }
  };

  Score.prototype.updateLevel = function() {
    this.containerLevel.innerHTML = [
      '<span class="leveltext">Level</span>', 
      buildLevelSpan(this.controller.level)
    ].join('');

    if(this.controller.level > 0 && this.controller.level % Constants.NB_LVL_BONUS === 0) {
      this.levelNextFactor = this.levelNextFactor + 1;
    }
    var percent = (this.controller.level * 100) / (Constants.NB_LVL_BONUS * this.levelNextFactor);

    ViewUtil.removeClassName(this.gaugePercentage, 'relax');
    ViewUtil.removeClassName(this.gaugePercentage, 'nervous');
    ViewUtil.removeClassName(this.gaugePercentage, 'dead');
    if(percent < 30) {
      ViewUtil.addClassName(this.gaugePercentage, 'relax');
    } else if(percent < 60) {
      ViewUtil.addClassName(this.gaugePercentage, 'nervous');
    } else {
      ViewUtil.addClassName(this.gaugePercentage, 'dead');
    }
    this.gaugePercentage.style.width = percent + '%';
  };

  return Score;

})();
