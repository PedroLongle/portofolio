export const defaultLocale = 'en';
export const locales = ['en', 'pt', 'es'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
};

// This is used to get the display name of a locale in its own language
export const localeDisplayNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
}; 