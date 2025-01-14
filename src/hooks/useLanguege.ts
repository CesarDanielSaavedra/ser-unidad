import { useContext } from 'react';
import { LanguageContext } from '../context/LenguageContext'; // Ajusta el path según sea necesario

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};