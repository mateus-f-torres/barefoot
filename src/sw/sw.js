import {skipWaiting, clientsClaim} from 'workbox-core'
import {precacheAndRoute, createHandlerBoundToURL} from 'workbox-precaching'
import {registerRoute, NavigationRoute} from 'workbox-routing'

skipWaiting()
clientsClaim()

precacheAndRoute(self.__WB_MANIFEST)

registerRoute(new NavigationRoute(createHandlerBoundToURL('/index.html')))
