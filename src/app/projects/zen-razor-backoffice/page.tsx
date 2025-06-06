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

export default function ZenRazorBackofficePage() {
  const { activeTab, handleTabChange } = useTabWithParams(Object.values(Tabs));
  const t = useTranslations('projects.zenRazor.backoffice');
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
                src="/projects/zen-razor/backoffice-mockup.svg" 
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
                  "Node.js",
                  "Express.js",
                  "Dashboard UI",
                  "Charts & Analytics",
                  "User Management"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h2 className="text-lg md:text-xl font-semibold">Back Office Dashboard</h2>
                  </div>
                  <p className="mb-4 text-sm md:text-base">
                    The Zen Razor back-office dashboard provides administrators with powerful tools to manage all aspects of the platform. Built with a focus on usability and efficiency, it streamlines complex administrative tasks into intuitive workflows.
                  </p>
                </div>
                
                <div className="bg-card p-2 md:p-4 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-semibold mb-3">Dashboard Capabilities</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground text-sm md:text-base">
                    <li>Real-time analytics and performance monitoring</li>
                    <li>User management and role-based access control</li>
                    <li>Content management system with WYSIWYG editor</li>
                    <li>Order and inventory management</li>
                    <li>Customer relationship management (CRM)</li>
                    <li>Financial reporting and transaction tracking</li>
                    <li>System configuration and settings management</li>
                    <li>Automated backup and data export tools</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === "tech" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { name: "React", icon: "react.svg", description: "Component-based architecture for complex dashboard interfaces" },
                    { name: "TypeScript", icon: "ts.svg", description: "Type safety for robust administrative functionality" },
                    { name: "Next.js", icon: "next.svg", description: "Full-stack framework with SSR for optimal performance" },
                    { name: "Node.js", icon: "node.svg", description: "Server-side JavaScript runtime for backend operations" },
                    { name: "Express.js", icon: "express.svg", description: "Web framework for building RESTful APIs" },
                    { name: "Dashboard UI", icon: "dashboard.svg", description: "Professional dashboard components and layouts" },
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
                    <h3 className="text-base md:text-lg font-semibold mb-4">Management Tools</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">User Management</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Complete user administration with role-based permissions</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Content Management</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">WYSIWYG editor for easy content creation and updates</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Inventory Control</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Real-time inventory tracking and automated alerts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
                    <h3 className="text-base md:text-lg font-semibold mb-4">Analytics & Reporting</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Real-time Dashboard</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Live data visualization with interactive charts and graphs</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Custom Reports</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Generate detailed reports with export capabilities</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v.283" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Data Export</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Multiple export formats including CSV, PDF, and Excel</p>
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