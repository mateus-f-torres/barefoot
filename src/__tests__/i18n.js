/* eslint camelcase: 'off' */
import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'

import mock_FAKE from './mock_FAKE.json'

const resources = {
  mock: {translation: mock_FAKE},
}

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'mock',
    fallbackLng: 'mock',
    keySeparator: '.',
  })

export default i18next
