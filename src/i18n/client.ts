import { useTranslations as useNextIntlTranslations, useLocale } from 'next-intl';

// Re-export these hooks for easier imports
export { useLocale as useCurrentLocale };
export const useMessages = useNextIntlTranslations;

// Create a namespace-specific translation function
export function useTranslations(namespace?: string) {
  return useNextIntlTranslations(namespace);
} 