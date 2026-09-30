import { createContext } from 'react';

export type Language = 'es' | 'en';

export type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
