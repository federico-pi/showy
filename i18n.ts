import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commons from '~assets/i18n/en/commons.json';
import home from '~assets/i18n/en/home.json';
import misc from '~assets/i18n/en/misc.json';

export const resources = {
  en: {
    commons,
    home,
    misc,
  },
} as const;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  ns: ['commons', 'home', 'misc'],
  resources,
});

export default i18n;
