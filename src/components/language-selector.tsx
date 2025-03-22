"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/i18n/provider";
import { useTranslations } from "@/i18n/client";
import { Locale, locales, localeDisplayNames } from "@/i18n/config";
import Image from "next/image";

export default function LanguageSelector() {
  const { locale, setLocale } = useI18n();
  const t = useTranslations('common.language');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Flag mapping
  const flagMap: Record<Locale, string> = {
    en: "/flags/en.svg",
    pt: "/flags/pt.svg", 
    es: "/flags/es.svg"
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (selectedLocale: Locale) => {
    setLocale(selectedLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-zinc-700 transition-colors"
        aria-label={t('select')}
      >
        <Image 
          src={flagMap[locale]} 
          alt={localeDisplayNames[locale]} 
          width={24} 
          height={24} 
          className="rounded-sm" 
        />
        <span className="text-sm sr-only md:not-sr-only">{localeDisplayNames[locale]}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-800 rounded-md shadow-md overflow-hidden z-50">
          <div className="p-1">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => handleSelect(l)}
                className={`flex items-center w-full justify-between px-3 py-2 text-left rounded-md hover:bg-zinc-700 transition-colors ${
                  l === locale ? 'bg-zinc-700' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Image 
                    src={flagMap[l]} 
                    alt={localeDisplayNames[l]} 
                    width={20} 
                    height={20} 
                    className="rounded-sm" 
                  />
                  <span className="text-sm">{localeDisplayNames[l]}</span>
                </div>
                
                {l === locale && (
                  <svg 
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 