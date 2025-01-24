import esDictionary from '../dictionaries/es.json';
import enDictionary from '../dictionaries/en.json';
import esIcons from '../assets/icons/es.json';
import enIcons from '../assets/icons/en.json';

type Dictionary = typeof esDictionary;
type Pages = typeof esDictionary.pages;
type Icons = typeof esIcons;

const dictionaries: Record<string, { dictionary: Dictionary; pages: Pages; icons: Icons }> = {
  es: { dictionary: esDictionary,  pages: esDictionary.pages, icons: esIcons },
  en: { dictionary: enDictionary, pages: enDictionary.pages, icons: enIcons }
};

export const useDictionary = (language: string = "es") => {
  return dictionaries[language] || dictionaries.es;
};