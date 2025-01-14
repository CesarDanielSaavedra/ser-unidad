import es from '../dictionaries/es.json';
import en from '../dictionaries/en.json';

type Dictionary = typeof es;

const dictionaries: Record<string, Dictionary> = { es, en };

export const useDictionary = (language: string = "es"): Dictionary => {
  return dictionaries[language] || dictionaries.es;
};