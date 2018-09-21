/* global caches, self, fetch */

const PRECACHE = 'precache-v1'
const RUNTIME = 'runtime'

var urlsToCache = [
  '/'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then((cache) => cache.addAll(urlsToCache))
      .then(self.skipWaiting())
  )
})

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName))
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete)
      }))
    }).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (!event.request.url.startsWith(self.location.origin)) return
  if (event.request.url.indexOf('sockjs-node') > 0) return
  console.log('FOO', event.request.url)

  if (event.request.url.indexOf('fetch-scores?date=') > 0) {
    console.log(1)
    // get the cached response
    caches.match(event.request).then(cachedResponse => {
      console.log(2)
      if (cachedResponse) {
        console.log('CACHED XHR!')
        // check it's complete
        let response = cachedResponse.clone()
        console.log(response.json().then)
        console.log(response)
        return cachedResponse
      }
    })
  }

  // if it is return it

  // if it's not, make the call to the network

  // if the network succeeds return it and cache it

  // if the network fails then return the original cached object

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        console.log('CACHED!')
        return cachedResponse
      }

      return caches.open(RUNTIME).then(cache => {
        return fetch(event.request).then(response => {
          console.log('FETCHING')
          // Put a copy of the response in the runtime cache.
          return cache.put(event.request, response.clone()).then(() => {
            console.log('CACHING')
            return response
          })
        })
      })
    })
  )
})
