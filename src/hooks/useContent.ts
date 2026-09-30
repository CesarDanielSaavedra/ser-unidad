import es from '../content/es.json';
import en from '../content/en.json';
import { useLanguage } from './useLanguage';
import type { Language } from '../context/LanguageContext';

export type Content = typeof es;

const content: Record<Language, Content> = { es, en: en as Content };

/** Textos traducibles del sitio, según el idioma activo. */
export const useContent = (): Content => {
  const { language } = useLanguage();
  return content[language];
};
