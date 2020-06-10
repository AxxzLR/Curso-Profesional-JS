const VERSION = 'v1'
//self es como this para Service Workers
self.addEventListener('install', event => {
    event.waitUntill(precache())
})

async function precache() {
    const cache = await caches.open(VERSION)
    //Se agregan los recursos al cache
    return cache.addAll([
        // '/',
        // '/src/WebSite/MediaPlayer.html',
        // '/src/WebSite/JS/index.js',
        // '/src/WebSite/JS/MediaPlayer.js',
        // '/src/WebSite/JS/plugins/AutoPlay.js',
        // '/src/WebSite/JS/plugins/AutoPause.js',
        // '/src/WebSite/style/index.css',
        // '/src/WebSite/assets/BigBuckBunny.mp4',
    ])
    //Se comenta de forma temporal por Typescript
}

self.addEventListener('fetch', event => {
    const request = event.request

    //Solo cachar los GET
    if (request.method !== 'GET') {
        return
    }

    event.respondWith(cachedResponse(request))

    event.waitUntill(updateCache(request))
})

async function cachedResponse(request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)

    return response || fetch(request) //Es posible que response es undefined, entonces retornar lo de internet
}

async function updateCache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}