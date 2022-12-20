import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, fr} from '../translations';
import {languageDetectorPlugin} from './languageDetectorPlugin';

//  Add here translation you wanna display
const resources = {fr: {translation: fr}, en: {translation: en}};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    compatibilityJSON: 'v3',
    resources,
    //language to use if translations in user language are not available
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: false, //in case you have any suspense related errors
    },
  });

export default i18n;
