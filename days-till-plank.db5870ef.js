parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({6:[function(require,module,exports) {
var _slicedToArray=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),$d=document.getElementById("d"),$h=document.getElementById("h"),$m=document.getElementById("m"),$s=document.getElementById("s"),D="day",H="hour",M="minute",S="second",JUDGEMENT_DAY=new Date(2018,4,15),DELTA_DAY=(new Date).getDate()-JUDGEMENT_DAY.getDate(),EMOTIONS={"😭":-3,"😀":-1,"😃":6,"🙁":7,"☹️":8,"😠":9,"😡":10,"🤬":11},getEmotion=function(t){return Object.keys(EMOTIONS).find(function(e){return t<EMOTIONS[e]})};document.getElementById("emotion").textContent=getEmotion(DELTA_DAY);var dt=function(){return JUDGEMENT_DAY-new Date},plur=function(t,e){return 1===e?e+" "+t:e+" "+t+"s"},extract=function extract(d){with(new Date(+d))return[getDate(),getHours(),getMinutes(),getSeconds()]},setTitle=function(t,e,n,r){return document.title=getEmotion(DELTA_DAY)+" "+t+"d "+e+"h "+n+"m "+r+"s"},setDisplay=function t(){var e=extract(dt()),n=_slicedToArray(e,4),r=n[0],o=n[1],i=n[2],u=n[3];$d.textContent=plur(D,r),$h.textContent=plur(H,o),$m.textContent=plur(M,i),$s.textContent=plur(S,u),setTitle(r,o,i,u),window.requestAnimationFrame(t)};window.requestAnimationFrame(setDisplay);
},{}]},{},[6])
//# sourceMappingURL=/days-till-plank.db5870ef.map