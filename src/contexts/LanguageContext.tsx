import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { en } from '@/i18n/translations/en';
import { pt } from '@/i18n/translations/pt';
import type { Language } from '@/i18n';

type Translations = typeof en;

const translations: Record<Language, Translations> = { en, pt };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[] | Record<string, unknown>[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pitch-deck-language') as Language;
      if (saved && (saved === 'en' || saved === 'pt')) {
        return saved;
      }
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('pitch-deck-language', language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = useCallback((key: string): string | string[] | Record<string, unknown>[] => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to English if key not found
        let fallback: unknown = translations.en;
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = (fallback as Record<string, unknown>)[fk];
          } else {
            return key; // Return key if not found in either language
          }
        }
        return fallback as string | string[] | Record<string, unknown>[];
      }
    }
    
    return value as string | string[] | Record<string, unknown>[];
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
