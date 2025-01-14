import React, { createContext, useState } from 'react';

interface LanguageProviderProps {
  children: React.ReactNode;
}

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>({
  language: 'es', 
  setLanguage: () => {} 
});

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState('es'); 

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

