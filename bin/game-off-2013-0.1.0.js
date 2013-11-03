/**
 * game-off-2013 - v0.1.0 - 2013-11-04
 * 
 *
 * Copyright (c) 2013 Froggies Team
 * Licensed  <>
 */
var BacklogController=function(){"use strict";function a(){this.view=new BacklogView(this),this.cards=[]}return a.prototype.addCard=function(){var a=new CardController;return this.cards.push(a),a.start(this.view.container),a},a.prototype.removeCard=function(a){var b=this.cards.indexOf(a);b>-1&&this.cards.splice(b,1)},a.prototype.start=function(a){this.view.draw(a)},a}(),CardController=function(){"use strict";function a(){this.view=new CardView(this)}return a.prototype.start=function(a){this.view.draw(a)},a}(),ColumnController=function(){"use strict";function a(){this.view=new ColumnView(this),this.cards=[new CardController,new CardController,new CardController,new CardController,new CardController]}return a.prototype.start=function(a){this.view.draw(a);for(var b=0;b<this.cards.length;b++)this.cards[b].start(this.view.container)},a}(),GameController=function(){"use strict";function a(){this.fps=1e3,this.nbLoop=0,this.timeout=void 0,this.view=new GameView(this),this.backlog=new BacklogController,this.columns=[new ColumnController,new ColumnController,new ColumnController,new ColumnController,new ColumnController]}return a.prototype.start=function(a){this.view.draw(a);for(var b=0;b<this.columns.length;b++)this.columns[b].start(this.view.container);this.backlog.start(this.view.container),this.resume()},a.prototype.pause=function(){window.clearInterval(this.timeout),this.timeout=void 0},a.prototype.resume=function(){if(void 0===this.timeout){var a=this;this.timeout=window.setInterval(function(){a.loop()},this.fps)}},a.prototype.loop=function(){return this.nbLoop=this.nbLoop+1,this.backlog.addCard(),this.backlog.cards.length>10?(this.pause(),window.alert("Game over"),"finish"):void 0},a}();window.onload=function(){console.log("start");var a=document.createElement("button");a.innerHTML="Add card",document.getElementsByTagName("body")[0].appendChild(a);var b=new GameController;b.start(document.getElementsByTagName("body")[0]),a.onclick=function(){console.log("click"),b.backlog.addCard()}};var BacklogView=function(){"use strict";function a(a){this.controller=a,this.container=b()}function b(){var a=document.createElement("div");return a.className="backlog",a}return a.prototype.draw=function(a){a.appendChild(this.container)},a}(),CardView=function(){"use strict";function a(a){this.controller=a,this.container=b()}function b(){var a=document.createElement("div");return a.className="card",a}return a.prototype.draw=function(a){a.appendChild(this.container)},a}(),ColumnView=function(){"use strict";function a(a){this.controller=a,this.container=b()}function b(){var a=document.createElement("div");return a.className="column",a}return a.prototype.draw=function(a){a.appendChild(this.container)},a}(),GameView=function(){"use strict";function a(a){this.controller=a,this.container=b()}function b(){var a=document.createElement("div");return a.className="game",a}return a.prototype.draw=function(a){a.appendChild(this.container)},a}();