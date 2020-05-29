import {skipWaiting, clientsClaim} from 'workbox-core'
import {precacheAndRoute, createHandlerBoundToURL} from 'workbox-precaching'
import {registerRoute, NavigationRoute} from 'workbox-routing'

skipWaiting()
clientsClaim()

// TODO:
/*
 * urlManipulation falha por content-enconding e content-type errados
 * deveria usar registerRoute e criar propria Response ?
 * ou usar cacheable-response para imitar a Response do Netlify ?
 *
 * hummmmmmm...
 *
 * verificar onde é que Brotli é descomprimido
 * será no servidor antes de enviar ou pelo cliente ao receber ??
 *
  precacheAndRoute(self.__WB_MANIFEST, {
    urlManipulation: ({url}) => {
      if (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
        const urlWithBrotli = new URL(url.href + '.br')
        console.log(url, urlWithBrotli)
        return [urlWithBrotli, url]
      }
    },
  })
*/
precacheAndRoute(self.__WB_MANIFEST)
registerRoute(new NavigationRoute(createHandlerBoundToURL('/index.html')))
