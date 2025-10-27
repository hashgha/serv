import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext();

const STORAGE_KEY = 'serve-lang';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    return saved === 'ar' || saved === 'en' ? saved : 'ar';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language === 'ar' ? 'ar' : 'en';
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isArabic: language === 'ar',
      switchLanguage: () => setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar')),
      setLanguage,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
