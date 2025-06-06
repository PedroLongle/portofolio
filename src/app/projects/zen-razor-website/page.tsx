"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/i18n/client";
import { useTabWithParams } from "@/hooks/use-tabs";

enum Tabs {
  OVERVIEW = "overview",
  TECH = "tech",
  FEATURES = "features"
}

export default function ZenRazorWebsitePage() {
  const { activeTab, handleTabChange } = useTabWithParams(Object.values(Tabs));
  const t = useTranslations('projects.zenRazor.website');
  const commonT = useTranslations('common'); 

  return (
    <div className="section">
      <div className="container">
        <div className="mx-auto mt-6 md:mt-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 md:mb-12 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {commonT('buttons.backToProjects')}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28 mb-2">
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold">{t('title')}</h1>
              <p className="text-sm md:text-lg mb-8 md:mb-12 mt-6 md:mt-8">
                {t('description.part1')}              
                <br></br>
                <br></br>
                {t('description.part2')}
                <br></br>
              </p>
            </div>
            <div className="w-full">
              <Image 
                src="/projects/zen-razor/website-mockup.svg" 
                alt={t('imageAlt')}
                width={700}
                height={1000}
                className="object-cover pointer-events-none w-full h-auto"
              />
            </div>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12 max-w-3xl pt-6 lg:pt-0">
                {[
                  "React", 
                  "TypeScript", 
                  "Next.js", 
                  "Tailwind CSS",
                  "Headless CMS",
                  "SEO Optimization",
                  "Responsive Design",
                  "Performance Optimization"
                ].map((tech, index) => (
                  <button 
                    key={index}
                    onClick={() => handleTabChange(Tabs.TECH)}
                    className="inline-flex items-center px-3 md:px-5 py-1 md:py-1.5 bg-card border border-border text-xs md:text-sm font-medium rounded-xl hover:bg-muted transition-colors cursor-pointer"
                  >
                    {tech}
                  </button>
                ))}
          </div>
        
          {/* Tabs */}
          <div className="overflow-x-auto -mx-4 px-4 mb-8">
            <nav className="flex min-w-[350px]">
              <button
                onClick={() => handleTabChange(Tabs.OVERVIEW)}
                className={`py-3 md:py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <span className="mx-2 md:mx-4 block">Overview</span>
              </button>
              <button
                onClick={() => handleTabChange(Tabs.TECH)}
                className={`py-3 md:py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "tech"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <span className="mx-2 md:mx-4 block">Tech Stack</span>
              </button>
              <button
                onClick={() => handleTabChange(Tabs.FEATURES)}
                className={`py-3 md:py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "features"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <span className="mx-2 md:mx-4 block">Features</span>
              </button>
            </nav>
          </div>
          
          {/* Tab content */}
          <div className="min-h-[400px]">
            {activeTab === "overview" && (
              <div>
                <div className="bg-card rounded-lg shadow-sm mb-8 p-4 md:p-6">
                  <div className="flex items-center mb-4">
                    <svg className="w-5 md:w-6 h-5 md:h-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    <h2 className="text-lg md:text-xl font-semibold">Project Overview</h2>
                  </div>
                  <p className="mb-4 text-sm md:text-base">
                    The Zen Razor public website serves as the digital face of the brand, showcasing products and services with a focus on user experience and performance. Built with modern web technologies to ensure fast loading times and seamless navigation.
                  </p>
                </div>
                
                <div className="bg-card p-2 md:p-4 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-semibold mb-3">Key Highlights</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground text-sm md:text-base">
                    <li>Modern, responsive design optimized for all devices</li>
                    <li>SEO-optimized structure for maximum search visibility</li>
                    <li>Content management system integration</li>
                    <li>Performance-focused architecture</li>
                    <li>Accessibility compliance (WCAG 2.1)</li>
                    <li>Analytics and conversion tracking</li>
                    <li>Social media integration</li>
                    <li>Contact forms and lead generation</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === "tech" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { name: "React", icon: "react.svg", description: "Component-based UI library for building interactive interfaces" },
                    { name: "TypeScript", icon: "ts.svg", description: "Type-safe JavaScript for better code quality and maintainability" },
                    { name: "Next.js", icon: "next.svg", description: "React framework with SSR, routing, and optimization features" },
                    { name: "Tailwind CSS", icon: "tailwind.svg", description: "Utility-first CSS framework for rapid UI development" },
                    { name: "Headless CMS", icon: "cms.svg", description: "Content management system for easy content updates" },
                    { name: "SEO Tools", icon: "seo.svg", description: "Search engine optimization tools and meta management" },
                  ].map((tech, index) => (
                    <div key={index} className="bg-card p-3 md:p-4 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center bg-primary/10 rounded-full">
                          <Image src={`/logos/${tech.icon}`} alt={tech.name} width={30} height={30} />
                        </div>
                        <h3 className="font-medium text-sm md:text-base">{tech.name}</h3>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === "features" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
                    <h3 className="text-base md:text-lg font-semibold mb-4">User Experience</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Responsive Design</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Mobile-first approach ensuring optimal experience across all devices</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Fast Loading</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Optimized images and code splitting for lightning-fast page loads</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Intuitive Navigation</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Clear menu structure and breadcrumbs for easy site navigation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
                    <h3 className="text-base md:text-lg font-semibold mb-4">Business Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Analytics Integration</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Comprehensive tracking of user behavior and conversion metrics</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">SEO Optimized</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Search engine optimization for maximum online visibility</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Lead Generation</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Contact forms and call-to-action buttons for customer acquisition</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 