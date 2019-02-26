import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import en_US from 'assets/translations/en_US.json';

const resources = {
  en: {translation: en_US},
  // pt: {translation: pt_BR},
  // es: {translation: es_ES},
  // fr: {translation: fr_FR},
  // jp: {translation: ja_JP},
}

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: '.',
  })

export default i18next;
