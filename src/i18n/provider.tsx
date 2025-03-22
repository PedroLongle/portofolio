"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { IntlProvider } from 'next-intl';
import { defaultLocale, locales, Locale } from './config';

// Define the type for our i18n context
interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Record<string, string>;
}

// Create context with default values
const I18nContext = createContext<I18nContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  messages: {},
});

// Hook to use the i18n context
export const useI18n = () => useContext(I18nContext);

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  // Get saved locale from localStorage or use default
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  // Initialize locale from localStorage if available
  useEffect(() => {
    // Client-side only code
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  // Load messages for the current locale
  useEffect(() => {
    async function loadMessages() {
      setLoading(true);
      try {
        // Use dynamic import to load the correct message file
        const localeMessages = (await import(`./messages/${locale}.json`)).default;
        setMessages(localeMessages);
        
        // Update HTML lang attribute
        document.documentElement.lang = locale;
        
        // Store in localStorage
        localStorage.setItem('locale', locale);
      } catch (error) {
        console.error(`Failed to load messages for locale ${locale}`, error);
        // Fallback to default locale if loading fails
        if (locale !== defaultLocale) {
          const defaultMessages = (await import(`./messages/${defaultLocale}.json`)).default;
          setMessages(defaultMessages);
        }
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, [locale]);

  // Function to change locale
  const setLocale = (newLocale: Locale) => {
    if (locales.includes(newLocale)) {
      setLocaleState(newLocale);
    }
  };

  // Render loading state while messages are being loaded
  if (loading && Object.keys(messages).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, messages }}>
      <IntlProvider 
        locale={locale} 
        messages={messages}
      >
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
} 