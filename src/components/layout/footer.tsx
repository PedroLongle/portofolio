"use client";

import Link from "next/link";
import { useTranslations } from "@/i18n/client";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("common.footer");
  const navT = useTranslations("common.nav");
  
  return (
    <footer className="bg-zinc-900 pt-16 pb-8 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-22">


          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-6 gap-4">
              <Image src="/logos/PL-white.svg" alt="logo" width={50} height={50} priority />
              <span className="text-xl font-bold">Pedro Longle</span>
            </Link>
            <p className="text-zinc-400 max-w-md mb-6">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/PedroLongle" ariaLabel="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/pedrolongle/" ariaLabel="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex text-sm md:text-md lg:text-base items-center">
                <svg className="w-5 h-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>pedro.longle.dev@gmail.com</span>
              </li>
              <li className="flex items-start text-sm md:text-md lg:text-base">
                <svg className="w-5 h-5 text-primary mr-3 md:mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Lisbon, Portugal</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <FooterLink href="/">{navT('home')}</FooterLink>
              <FooterLink href="/projects">{navT('projects')}</FooterLink>
              <FooterLink href="/about">{navT('about')}</FooterLink>
              <FooterLink href="/contact">{navT('contact')}</FooterLink>
              <FooterLink href="/support">{navT('support')}</FooterLink>
            </ul>
          </div>
          
          
        </div>
        
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Pedro Longle. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ 
  href, 
  ariaLabel, 
  children 
}: { 
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-zinc-400 hover:text-primary transition-colors"
    >
      {children}
    </a>
  );
}

function FooterLink({ 
  href, 
  children 
}: { 
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link 
        href={href}
        className="text-zinc-400 hover:text-primary transition-colors text-sm md:text-md lg:text-base" 
      >
        {children}
      </Link>
    </li>
  );
} 