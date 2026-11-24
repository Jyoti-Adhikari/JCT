import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'jct_lang',
      caches: ['localStorage'],
    },
  });

// Set initial direction
const currentLang = i18n.language?.startsWith('ar') ? 'ar' : 'en';
document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = currentLang;

i18n.on('languageChanged', (lng) => {
  const isArabic = lng.startsWith('ar');
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.documentElement.lang = isArabic ? 'ar' : 'en';
});

export default i18n;

