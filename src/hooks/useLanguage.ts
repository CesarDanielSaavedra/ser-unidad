import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Ajusta el path según sea necesario

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};