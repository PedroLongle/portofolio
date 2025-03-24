"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "@/i18n/client"
import LanguageSelector from "./language-selector"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('common.nav')
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

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

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])
  
  // Handle clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container flex justify-between items-center">
        <Link href="/" className="font-bold text-xl z-20" style={{ color: 'var(--primary)' }}>
         <Image src="/logos/PL.svg" alt="logo" width={50} height={50} priority />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          ref={menuButtonRef}
          className="md:hidden z-20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
        
        {/* Mobile menu overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-10 transition-opacity duration-300 md:hidden ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4">
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
        
        {/* Mobile menu */}
        <div 
          ref={menuRef}
          className={`fixed top-0 right-0 bottom-0 w-64 bg-card shadow-xl z-20 transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden pt-20 px-6`}
        >
          <nav className="flex flex-col gap-6">
            <NavLink href="/" active={pathname === "/"}>{t('home').toUpperCase()}</NavLink>
            <NavLink href="/projects" active={pathname.startsWith("/projects")}>{t('projects').toUpperCase()}</NavLink>
            <NavLink href="/about" active={pathname === "/about"}>{t('about').toUpperCase()}</NavLink>
            <NavLink href="/contact" active={pathname === "/contact"}>{t('contact').toUpperCase()}</NavLink>
            <NavLink href="/support" active={pathname === "/support"}>{t('support').toUpperCase()}</NavLink>
          </nav>
          <div className="border-t border-zinc-700 my-6"></div>
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