if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/376-8fc6f863a7c267be.js",revision:"8fc6f863a7c267be"},{url:"/_next/static/chunks/668-bb873c050036ce9d.js",revision:"bb873c050036ce9d"},{url:"/_next/static/chunks/675-06dbc63639b81fc3.js",revision:"06dbc63639b81fc3"},{url:"/_next/static/chunks/676-371bbbe4a85820f0.js",revision:"371bbbe4a85820f0"},{url:"/_next/static/chunks/956-c712190bf5d2b9c0.js",revision:"c712190bf5d2b9c0"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-e380ed469c5a0a07.js",revision:"e380ed469c5a0a07"},{url:"/_next/static/chunks/pages/_app-d8bb1b37e5d8ffb3.js",revision:"d8bb1b37e5d8ffb3"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/createqueue-b8cf12d57598f111.js",revision:"b8cf12d57598f111"},{url:"/_next/static/chunks/pages/dashboard-dd33f0bf65683b84.js",revision:"dd33f0bf65683b84"},{url:"/_next/static/chunks/pages/index-8872e9fbadf2fa5f.js",revision:"8872e9fbadf2fa5f"},{url:"/_next/static/chunks/pages/login-d962d470c89252e3.js",revision:"d962d470c89252e3"},{url:"/_next/static/chunks/pages/myslots-d30c6b87d2b1f8dd.js",revision:"d30c6b87d2b1f8dd"},{url:"/_next/static/chunks/pages/queues-704d44f196d5b3c3.js",revision:"704d44f196d5b3c3"},{url:"/_next/static/chunks/pages/signup-4f0070cdc7116455.js",revision:"4f0070cdc7116455"},{url:"/_next/static/chunks/pages/subscribe-5e3137dbdb3f11dd.js",revision:"5e3137dbdb3f11dd"},{url:"/_next/static/chunks/pages/yourqueues-8b5ab165a41f8256.js",revision:"8b5ab165a41f8256"},{url:"/_next/static/chunks/pages/yourslots-fed5650a9382883f.js",revision:"fed5650a9382883f"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-2e51481b1d484a05.js",revision:"2e51481b1d484a05"},{url:"/_next/static/css/2d9afdb4719ab684.css",revision:"2d9afdb4719ab684"},{url:"/_next/static/uue3yTvuSByBGmyCbk2Ph/_buildManifest.js",revision:"7aa74452ecf9588a2810510e50762885"},{url:"/_next/static/uue3yTvuSByBGmyCbk2Ph/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/uue3yTvuSByBGmyCbk2Ph/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/android-144x144.png",revision:"3dcbe473a912b7cfd09160c446b4c8fa"},{url:"/icons/android-192x192.png",revision:"2f76667cc5ef90dd0a01453416eb2a84"},{url:"/icons/android-36x36.png",revision:"18fc256d854d1391472fa9df55407110"},{url:"/icons/android-48x48.png",revision:"4fe9eec1cd106e18225bda503f9219ef"},{url:"/icons/android-72x72.png",revision:"d1d18adbc6e887d6a179ca17b2d12320"},{url:"/icons/android-96x96.png",revision:"00b01ae183a6b5c379be8084f656f7f4"},{url:"/icons/android-chrome-192x192.png",revision:"2f76667cc5ef90dd0a01453416eb2a84"},{url:"/icons/android-chrome-512x512.png",revision:"938851c866524054b1468189e6b2a11c"},{url:"/icons/android-chrome-maskable-512x512.png",revision:"938851c866524054b1468189e6b2a11c"},{url:"/icons/maskable-192x192.png",revision:"8477e71a3120caa239be1409b6b1d08c"},{url:"/manifest.json",revision:"f69099e951d5c473e907eb682ffc7fe4"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
