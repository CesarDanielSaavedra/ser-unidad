import esDictionary from '../dictionaries/es.json';
import enDictionary from '../dictionaries/en.json';
import esIcons from '../assets/icons/es.json';
import enIcons from '../assets/icons/en.json';

type Dictionary = typeof esDictionary;
type Components = typeof esDictionary.components;
type Pages = typeof esDictionary.pages;
type Icons = typeof esIcons;

const dictionaries: Record<string, { dictionary: Dictionary; components: Components; pages: Pages; icons: Icons }> = {
  es: { dictionary: esDictionary, components: esDictionary.components, pages: esDictionary.pages, icons: esIcons },
  en: { dictionary: enDictionary, components: enDictionary.components, pages: enDictionary.pages, icons: enIcons }
};

export const useDictionary = (language: string = "es") => {
  return dictionaries[language] || dictionaries.es;
};