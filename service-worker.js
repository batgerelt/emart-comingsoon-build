"use strict";var precacheConfig=[["/index.html","3c2c256556881352465160b0876f1d63"],["/static/css/main.8d04ccbd.css","8d04ccbdc07f45b7a678f1867a3298c6"],["/static/css/main.8d04ccbd.css.gz","2090233e2572e494deb1622968acbc92"],["/static/js/main.1282d60d.js.gz","703e9b273534b4bf934e85057871fe43"],["/static/media/001-search.05c14bba.svg","05c14bba53cb2b5c0459505220d2be24"],["/static/media/002-shopping-cart.deb82563.svg","deb82563b1570a4a59f393f8ca0f3a1a"],["/static/media/003-chat-Copy.d9d05ef9.svg","d9d05ef93957ba30bd147753ce4378d4"],["/static/media/003-chat.5229aa77.svg","5229aa77e40996a53e1c68d827b16ca7"],["/static/media/2.abfd0f5e.jpg","abfd0f5e7d4f538116fc92e50e2a61ea"],["/static/media/cart.418c3fc0.jpg","418c3fc067062fed361d3bf9cfc92a4b"],["/static/media/defaultAvatar.16713bc1.png","16713bc1c166d6ad1763d052b59fa41d"],["/static/media/emart-logo.ec6a1350.png","ec6a1350441832a94056d52e63d1af3e"],["/static/media/error-black.eef66d80.svg","eef66d8017d1ae7922990fdd9ae8c808"],["/static/media/error.d6174862.svg","d6174862dc2ba9b57e131a5fa1b43db5"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/goup.c52882c6.svg","c52882c697fdcd10b161d2a226c9af4c"],["/static/media/history.40068fcb.svg","40068fcb93604b0c3b13355b0b82d2b6"],["/static/media/list.28afff3a.svg","28afff3a981b0a50bb76de4ebe419435"],["/static/media/loader.f9959f15.svg","f9959f15d00405f9942264953f810000"],["/static/media/location.8be0af4f.svg","8be0af4fd2bcf2a29d039770b225965e"],["/static/media/lock.4e112593.png","4e11259328f86e2f277c4149f51f3a97"],["/static/media/login.731c129f.svg","731c129f50863f7a2dba19e0b831a7c1"],["/static/media/logo.fc6ecce9.jpg","fc6ecce9ad1d77812bbac82d836eec64"],["/static/media/not-found.f64949b8.jpg","f64949b82f165097070c01693e14c250"],["/static/media/password.bf989ec6.svg","bf989ec6d6a8e9a50946c99b0b1753f2"],["/static/media/profile.43e810d2.svg","43e810d287048d4f36681d8b85cddf40"],["/static/media/sign-out.166d224d.svg","166d224d6b9d17855bfd54dc0a9ca3ff"],["/static/media/store.30406e90.svg","30406e901d2e869ac99dc92687282348"],["/static/media/user.de413303.png","de4133035519cfc0b172ef0cf69f8761"],["/static/media/user.f990ed44.svg","f990ed44a1a86fd5f00628858f7bd058"],["/static/media/wishlist.96df80bb.svg","96df80bb79afcb4bd71af99aa81150db"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});