/* eslint-disable @typescript-eslint/no-empty-function */
/*eslint-disable @typescript-eslint/no-unused-vars*/
import i18next, {
  InitOptions,
  LanguageDetectorAsyncModule,
  Services
} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeModules, Platform} from 'react-native';
import en from '@other/translations/en';
import tr from '@other/translations/tr';

//Detect Language
export const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLanguages[0] || 'tr'
    : NativeModules.I18nManager.localeIdentifier;

const languageDetector: LanguageDetectorAsyncModule = {
  async: true,
  cacheUserLanguage: (lng: string): void => {},
  detect: () => locale,
  init: (
    services: Services,
    detectorOptions: Record<string, unknown>,
    i18nextOptions: InitOptions
  ): void => {},
  type: 'languageDetector'
};

//The Translations
const resources = {
  en: {
    translation: en
  },
  tr: {
    translation: tr
  }
};

//Setup
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'tr',
    lng: locale.substring(0, 2),
    resources: resources
  });

export default i18next;
