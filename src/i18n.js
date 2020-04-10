/* eslint camelcase: 'off' */
import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'

import en_US from './assets/translations/en_US.json'
import pt_BR from './assets/translations/pt_BR.json'
import es_ES from './assets/translations/es_ES.json'
import fr_FR from './assets/translations/fr_FR.json'

const resources = {
  en: {translation: en_US},
  pt: {translation: pt_BR},
  es: {translation: es_ES},
  fr: {translation: fr_FR},
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: '.',
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
