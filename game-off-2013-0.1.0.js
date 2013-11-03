/**
 * game-off-2013 - v0.1.0 - 2013-11-03
 * 
 *
 * Copyright (c) 2013 Froggies Team
 * Licensed  <>
 */
var game=function(){function a(){c()}function b(){window.clearInterval(d),d=void 0}function c(){d||(d=window.setInterval(function(){f+=1},e))}var d,e=50,f=0;return{start:function(){a()},pause:function(){b()},resume:function(){c()},getFps:function(){return e},getNbLoop:function(){return f},getBacklog:function(){return{}}}}();