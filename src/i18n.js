/* eslint camelcase: 'off' */
import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'

import en_US from './assets/translations/en_US/en_US'
import pt_BR from './assets/translations/pt_BR/pt_BR'
import es_ES from './assets/translations/es_ES/es_ES'
import fr_FR from './assets/translations/fr_FR/fr_FR'

const resources = {
  en: en_US,
  pt: pt_BR,
  es: es_ES,
  fr: fr_FR,
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  nsSeparator: ':',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
    format: function (value, format, lng) {
      switch (format) {
        case 'number':
          return new Intl.NumberFormat(lng).format(value)
        case 'date':
          return new Intl.DateTimeFormat(lng).format(value)
        default:
          return value
      }
    },
  },
})

export default i18next
