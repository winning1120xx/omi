"use strict";var precacheConfig=[["./cn.html","ff6445353ee1c3468a5696033d4e925b"],["./index.html","580b47de35d0b1c3a842c33c7158c667"],["./static/css/cn.4dd07f49.css","476d16186dc05ff3faa0a5d4dc9ac72c"],["./static/css/index.4dd07f49.css","9ad340cc60e8fed0f9856b562708144e"],["./static/js/0.ae003598.chunk.js","1cf2a7a09bb41b4a99b9902992945824"],["./static/js/1.b3141efd.chunk.js","507b96465c9f58503e10ae75e94b0a1e"],["./static/js/10.c476c89b.chunk.js","4a0ea5cc2cf1d06f9d0a476ffefa7681"],["./static/js/11.ac0b3818.chunk.js","84eb118fceea10a39019a6071bf4d49d"],["./static/js/12.73a5e06b.chunk.js","ce8f5f905b64074a7ce57dbfe4781e15"],["./static/js/13.5bad1570.chunk.js","20d54d5b9ffb3ad6dd0320bcea27db14"],["./static/js/14.dd54c9b5.chunk.js","a890eae5a829cb044da01dc23dda8e34"],["./static/js/15.7c1a790c.chunk.js","276fb6c0eb3e53ffb17301fee76d6e7c"],["./static/js/16.5b98a566.chunk.js","acf1b2c7f287158b18bee2bf9d8d6640"],["./static/js/17.7debd65e.chunk.js","6ab6a3e88a4fe492f0828a4dc1f72c62"],["./static/js/18.23166a1b.chunk.js","ef385374d10f7d3695e8f08733f3747d"],["./static/js/19.8be02715.chunk.js","495e4fda358f265aadc92f1e82db3b0f"],["./static/js/2.bfa026eb.chunk.js","8a764cb76e1c636d54d98d434dadf9fe"],["./static/js/20.2fa79bf7.chunk.js","0cc5e575ec621ccf9a26e296b8b61bc0"],["./static/js/21.69d6a7ad.chunk.js","5e0bb16e07532a537c895e027e987570"],["./static/js/22.e3d12e3f.chunk.js","a713c85725a6a406a971ae3f71fda940"],["./static/js/23.02f642f0.chunk.js","15f625e2d5d835bfb42d063bef3f7d52"],["./static/js/24.edf96c17.chunk.js","fcc5eedb316dc32e0360c309cd8ed134"],["./static/js/25.8e31929c.chunk.js","9aff199f52e93ebde3a6e63d44a114e4"],["./static/js/26.3ae68c43.chunk.js","f2a8bd33259f7f7c3b9ea3c1a92b1e3e"],["./static/js/27.99d26497.chunk.js","f3fd8cc65f35cc9dfa4c9f3dd22672c3"],["./static/js/28.1e91c810.chunk.js","71b172902d9c005a0f9aba695e1fc789"],["./static/js/29.cf505418.chunk.js","9cd6f04c44bac5ebe1d332625c5fefb2"],["./static/js/3.3f936764.chunk.js","8dbda1b79f75d2e8010ccdee21f1f552"],["./static/js/30.39385c33.chunk.js","ac5bcf17b6db61eaff8ad33184a7c673"],["./static/js/31.1c3e8950.chunk.js","29db687260f0c987e1097ec1d32f80ec"],["./static/js/32.09d9c9d4.chunk.js","7bfdd4ce9adab81bf2aba5e2d9b05f5a"],["./static/js/33.69bc727a.chunk.js","7f1345069d1009e2c8abea841b61f7f2"],["./static/js/34.93c53b33.chunk.js","957655ff78eeef6467a8c58820880dee"],["./static/js/35.5d30ffef.chunk.js","caad7b7c2fe9fb7983bd941b29b7ead4"],["./static/js/36.c20ddd3c.chunk.js","71120a00b310c1ee02ab09d09dc33ec6"],["./static/js/37.3d967cd7.chunk.js","4016883443462ea0483071b14493c13b"],["./static/js/38.d03195f9.chunk.js","e4b3977c9573ba83c892e074467760a1"],["./static/js/4.b9581ac9.chunk.js","48624f0358e8202b17e9db4842b8a1c5"],["./static/js/5.9f021fad.chunk.js","9365a314559aabc04c7b90f9fd11a62d"],["./static/js/6.3e82e1ab.chunk.js","03915beb3ac846b2b0ffe2ca6cdb4be9"],["./static/js/7.0ecae044.chunk.js","6d6018a596babe261b579276905cf128"],["./static/js/8.0af4a62e.chunk.js","168af2864334b686cad7f0197d14a374"],["./static/js/9.ca3ea0d9.chunk.js","f42c5ba866b891c4bde2ff429db74413"],["./static/js/cn.caa9d113.js","4902e569137c51b488895ea332797583"],["./static/js/index.d3bf9dff.js","b7e9b04a59486f2a56d83c12ce117f30"],["./static/media/omi-logo2019.923166c3.svg","923166c362dce831a15c447b19a622f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=c),a.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],a=e[1],t=new URL(c,self.location),s=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){if("GET"===c.request.method){var e,a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a));var s="./index.html";!e&&"navigate"===c.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],c.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)}))}});