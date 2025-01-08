import es from '../dictionaries/es.json';

type Dictionary = typeof es;

const dictionaries: Record<string, Dictionary> = { es };

export const useDictionary = (language: string = "es"): Dictionary => {
  return dictionaries[language] || dictionaries.es;
};