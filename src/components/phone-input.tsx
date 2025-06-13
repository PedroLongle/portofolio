import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { XCircle } from "lucide-react";

interface CountryOption {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  format: string;
  placeholder: string;
}

const countries: CountryOption[] = [
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: '🇵🇹', format: 'xxx xxx xxx', placeholder: '912 345 678' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', format: '(xxx) xxx-xxxx', placeholder: '(555) 123-4567' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', format: 'xxxx xxx xxxx', placeholder: '7700 900123' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸', format: 'xxx xxx xxx', placeholder: '612 345 678' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', format: 'xx xx xx xx xx', placeholder: '06 12 34 56 78' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', format: 'xxxx xxxxxxx', placeholder: '1234 5678901' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹', format: 'xxx xxx xxxx', placeholder: '312 345 6789' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', format: '(xx) xxxxx-xxxx', placeholder: '(11) 91234-5678' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', format: '(xxx) xxx-xxxx', placeholder: '(416) 123-4567' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', format: 'xxxx xxx xxx', placeholder: '0412 345 678' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', format: 'xxxxx xxxxx', placeholder: '98765 43210' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵', format: 'xx-xxxx-xxxx', placeholder: '90-1234-5678' },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳', format: 'xxx xxxx xxxx', placeholder: '138 0013 8000' },
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽', format: 'xxx xxx xxxx', placeholder: '55 1234 5678' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱', format: 'xx xxx xxxx', placeholder: '06 123 45678' },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string;
  label?: string;
  name?: string;
}

// Function to format phone number based on country pattern
const formatPhoneNumber = (value: string, format: string): string => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '');
  
  let formatted = '';
  let digitIndex = 0;
  
  for (let i = 0; i < format.length && digitIndex < digits.length; i++) {
    if (format[i] === 'x') {
      formatted += digits[digitIndex];
      digitIndex++;
    } else {
      formatted += format[i];
    }
  }
  
  return formatted;
};

// Function to extract digits from formatted number
const extractDigits = (formattedValue: string): string => {
  return formattedValue.replace(/\D/g, '');
};

export default function PhoneInput({
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  label,
  name
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCountrySelect = (country: CountryOption) => {
    setSelectedCountry(country);
    setIsOpen(false);
    
    // Extract current digits and reformat for new country
    const currentDigits = extractDigits(value.replace(/^(\+\d{1,4})\s?/, ''));
    const formattedNumber = formatPhoneNumber(currentDigits, country.format);
    onChange(`${country.dialCode} ${formattedNumber}`);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Extract only digits from input
    const digits = extractDigits(inputValue);
    
    // Format according to selected country pattern
    const formattedNumber = formatPhoneNumber(digits, selectedCountry.format);
    
    // Update with country code + formatted number
    onChange(`${selectedCountry.dialCode} ${formattedNumber}`);
  };

  // Extract the phone number part (without country code) for display
  const phoneNumberPart = value.replace(/^(\+\d{1,4})\s?/, '');

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-xs md:text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <div className="flex">
          {/* Country Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-2 px-4 py-3 border-r-0 rounded-l-lg bg-zinc-800 text-xs md:text-sm lg:text-md hover:bg-zinc-700 focus:outline-none transition ${
                error ? "border border-red-500" : "border-none"
              }`}
            >
              <span className="text-lg">{selectedCountry.flag}</span>
              <span className="text-sm font-medium">{selectedCountry.dialCode}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown */}
            {isOpen && (
              <div className="absolute top-full left-0 z-50 w-64 mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleCountrySelect(country)}
                    className="flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-zinc-700 focus:bg-zinc-700 focus:outline-none text-xs md:text-sm"
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="text-sm font-medium">{country.dialCode}</span>
                    <span className="text-sm truncate">{country.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Phone Input */}
          <input
            type="tel"
            id={name}
            name={name}
            value={phoneNumberPart}
            onChange={handlePhoneChange}
            onBlur={onBlur}
            placeholder={placeholder || selectedCountry.placeholder}
            className={`flex-1 px-4 py-3 rounded-r-lg bg-zinc-800 text-xs md:text-sm lg:text-md focus:outline-0 transition ${
              error ? "border border-red-500 border-l-0" : "border-none"
            }`}
          />
        </div>
        
        {/* Click outside to close dropdown */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
      
      {/* Error Message with Animation */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-1 overflow-hidden"
          >
            <div className="flex items-center text-red-500 text-sm gap-1">
              <XCircle className="h-4 w-4 mr-1 flex-shrink-0" />
              <span>{error}.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 