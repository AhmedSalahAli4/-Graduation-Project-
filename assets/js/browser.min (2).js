
var browser=function(){"use strict";var t={name:null,version:null,os:null,osVersion:null,touch:null,mobile:null,_canUse:null,canUse:function(e){t._canUse||(t._canUse=document.createElement("div"));var n=t._canUse.style,r=e.charAt(0).toUpperCase()+e.slice(1);return e in n||"Moz"+r in n||"Webkit"+r in n||"O"+r in n||"ms"+r in n},init:function(){for(var e=navigator.userAgent,n="other",r=0,i=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],o=0;o<i.length;o++)if(e.match(i[o][1])){n=i[o][0],r=parseFloat(RegExp.$1);break}for(t.name=n,t.version=r,n="other",i=[["ios",/([0-9_]+) like Mac OS X/,function(e){return e.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(e){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(e){return e.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null],["linux",/Linux/,null],["bsd",/BSD/,null],["unix",/X11/,null]],o=r=0;o<i.length;o++)if(e.match(i[o][1])){n=i[o][0],r=parseFloat(i[o][2]?i[o][2](RegExp.$1):RegExp.$1);break}"mac"==n&&"ontouchstart"in window&&(1024==screen.width&&1366==screen.height||834==screen.width&&1112==screen.height||810==screen.width&&1080==screen.height||768==screen.width&&1024==screen.height)&&(n="ios"),t.os=n,t.osVersion=r,t.touch="wp"==t.os?0<navigator.msMaxTouchPoints:!!("ontouchstart"in window),t.mobile="wp"==t.os||"android"==t.os||"ios"==t.os||"bb"==t.os}};return t.init(),t}();!function(e,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():e.browser=n()}(this,function(){return browser});
