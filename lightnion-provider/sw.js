// HTTP(s) redirection service worker

var window = "";
importScripts('lightnion.bundle.js');
importScripts('forge.all.js');
importScripts('https.js');
importScripts('params.js');

self.addEventListener('install', function (event) {
    console.log("[ServiceWorker] Installed");
});

self.addEventListener('activate', function (event) {
    console.log("[ServiceWorker] Activating");
});

self.addEventListener('fetch', event => {
    event.respondWith(function () {
        var requestUrl = new URL(event.request.url);
        console.log(`[ServiceWorker] intercepted fetch: ${requestUrl}`)

        // special case for index
        // TODO: review
        if (requestUrl.host === params.lightnionHost && params.lightnionPaths.includes(requestUrl.pathname)) {
            return fetch(requestUrl);
        }


        requestUrl.host = params.host
        requestUrl.port = params.port
        console.log(`[ServiceWorker] redirected fetch: ${requestUrl}`)

        return https.fetch(requestUrl).then(resp => {
            return new Promise((resolve, reject) => {
                var r = new Response(resp.body, {
                    "status": resp.status,
                    "statusText": resp.message,
                    "headers": new Headers(resp.fields)
                });
                resolve(r);
            })
        });
    }());
});
