import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export function useLanguage() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language?.startsWith('ar') ? 'ar' : 'en';
  const isRTL = currentLanguage === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [isRTL, currentLanguage]);

  const changeLanguage = (lang: 'en' | 'ar') => {
    i18n.changeLanguage(lang);
  };

  const toggleLanguage = () => {
    const nextLang = currentLanguage === 'en' ? 'ar' : 'en';
    changeLanguage(nextLang);
  };

  return {
    currentLanguage,
    isRTL,
    changeLanguage,
    toggleLanguage,
    t,
  };
}

