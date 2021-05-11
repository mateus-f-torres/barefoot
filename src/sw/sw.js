// @ts-nocheck
import {clientsClaim} from "workbox-core"
import {precacheAndRoute, createHandlerBoundToURL} from "workbox-precaching"
import {registerRoute, NavigationRoute} from "workbox-routing"

self.skipWaiting()

clientsClaim()

precacheAndRoute(self.__WB_MANIFEST)
registerRoute(new NavigationRoute(createHandlerBoundToURL("/index.html")))

importScripts("https://js.pusher.com/beams/service-worker.js")
