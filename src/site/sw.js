/* global caches, self, fetch */

const PRECACHE = 'precache-v2'
const RUNTIME = 'runtime'

// Proactively cache certain requests
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
  if (!event.request.url.startsWith(self.location.origin)) {
    // Dev Server
    if (event.request.url.indexOf('fetch-scores') < 0) return
  }

  // Dev Server
  if (event.request.url.indexOf('sockjs-node') > 0) return

  if (event.request.url.indexOf('fetch-scores') > 0) {
    // get the cached response
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        let response = cachedResponse.clone()

        return response.json()
          .then(({ games }) => {
            if (!games.length) {
              // There were no games on this day and we're not going to get any
              // so just return the data
              return cachedResponse
            }

            if (games.some(game => !game.completed)) {
              // The games are still in progress
              // so make the call to the network in case they've finished
              return caches.open(RUNTIME).then(cache => {
                return fetch(event.request).then(response => {
                  // Put a copy of the response in the runtime cache.
                  return cache.put(event.request, response.clone()).then(() => response)
                })
              })
            }
            // The games are complete, use the cached response
            return cachedResponse
          })
      }
      // Nothing in the cache, gotta use the network
      return caches.open(RUNTIME).then(cache => {
        return fetch(event.request).then(response => {
          // Put a copy of the response in the runtime cache.
          return cache.put(event.request, response.clone()).then(() => {
            return response
          })
        })
      })
    })
  }

  // All other requests
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse

      return caches.open(RUNTIME).then(cache => {
        return fetch(event.request).then(response => {
          return cache.put(event.request, response.clone()).then(() => response)
        })
      })
    })
  )
})
