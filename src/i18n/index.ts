export { en } from './translations/en';
export { pt } from './translations/pt';

export type Language = 'en' | 'pt';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' }
];
