"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LanguageSelector from "./language-selector"
import { useTranslations } from "@/i18n/client"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('common.nav')

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container flex justify-between items-center">
        <Link href="/" className="font-bold text-xl" style={{ color: 'var(--primary)' }}>
          <svg 
            viewBox="0 0 24 24" 
            fill="none"
            className="h-8 w-8"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6">
            <NavLink href="/" active={pathname === "/"}>{t('home').toUpperCase()}</NavLink>
            <NavLink href="/projects" active={pathname.startsWith("/projects")}>{t('projects').toUpperCase()}</NavLink>
            <NavLink href="/about" active={pathname === "/about"}>{t('about').toUpperCase()}</NavLink>
            <NavLink href="/contact" active={pathname === "/contact"}>{t('contact').toUpperCase()}</NavLink>
            <NavLink href="/support" active={pathname === "/support"}>{t('support').toUpperCase()}</NavLink>
          </nav>
          <div className="border-l border-zinc-700 h-6 mx-2"></div>
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}

function NavLink({ 
  href, 
  active, 
  children 
}: { 
  href: string
  active: boolean
  children: React.ReactNode 
}) {
  return (
    <Link 
      href={href}
      style={{ 
        fontSize: '0.875rem',
        letterSpacing: '0.05em',
        transition: 'color 0.2s ease',
        color: active ? 'var(--primary)' : '#d4d4d8',
        fontWeight: active ? '500' : '400'
      }}
      className={`hover-effect`}
      onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
      onMouseOut={(e) => e.currentTarget.style.color = active ? 'var(--primary)' : '#d4d4d8'}
    >
      {children}
    </Link>
  )
} 