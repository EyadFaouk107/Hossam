
import { useState, useEffect } from 'react';
import { translations } from '../lib/translations';

export const useLanguage = () => {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    // Initial check
    const savedLang = localStorage.getItem('preferredLanguage') as 'en' | 'ar' || 'en';
    setLang(savedLang);

    // Sync with HTML attribute (which is updated by Navbar or Google Translate script)
    const observer = new MutationObserver(() => {
      const currentLang = document.documentElement.lang as 'en' | 'ar' || 'en';
      if (currentLang !== lang) {
        setLang(currentLang);
      }
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    return () => observer.disconnect();
  }, [lang]);

  const t = translations[lang];

  const setLanguage = (newLang: 'en' | 'ar') => {
    setLang(newLang);
    localStorage.setItem('preferredLanguage', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return { lang, t, setLanguage };
};
