"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/i18n/client";
import { useTabWithParams } from "@/hooks/use-tabs";
import GitHubRepo from "@/components/projects/github-repo";
import LiveDemoButton from "@/components/projects/live-demo-button";

enum Tabs {
  REPO = "repo",
  TECH = "tech",
  PERFORMANCE = "performance"
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
              
              {/* Live Demo Button */}
              <div className="mb-8 md:mb-12">
                <LiveDemoButton 
                  demoUrl="https://zen-razor-website--zen-razor.europe-west4.hosted.app/" 
                  size="md"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
            <div className="w-full">
              <Image 
                src="/projects/zen-razor/website/mockup.svg" 
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
                  "Firebase",
                  "Google Maps API",
                  "React Hook Form + yup",
                  "next-intl",
                  "GitHub Actions"
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
                onClick={() => handleTabChange(Tabs.REPO)}
                className={`py-3 md:py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "repo"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <span className="mx-2 md:mx-4 block">{t('tabs.repo')}</span>
              </button>
              <button
                onClick={() => handleTabChange(Tabs.TECH)}
                className={`py-3 md:py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "tech"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <span className="mx-2 md:mx-4 block">{t('tabs.tech')}</span>
              </button>
              <button
                onClick={() => handleTabChange(Tabs.PERFORMANCE)}
                className={`py-3 md:py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "performance"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <span className="mx-2 md:mx-4 block">{t('tabs.performance')}</span>
              </button>
            </nav>
          </div>
          
          {/* Tab content */}
          <div className="min-h-[400px]">
            {activeTab === "repo" && (
              <div>
                <GitHubRepo 
                  repoUrl="https://github.com/PedroLongle/portofolio" 
                  title={t('repo.title')} 
                  description={t('repo.description')} 
                />
                
                <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-2xl font-semibold mb-6">{t('overview.keyHighlights.title')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-sm md:text-base">{t('features.core.appointment.title')}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">{t('features.core.appointment.description')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-sm md:text-base">{t('features.core.services.title')}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">{t('features.core.services.description')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-sm md:text-base">{t('features.core.barbers.title')}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">{t('features.core.barbers.description')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-sm md:text-base">{t('overview.keyHighlights.interactiveMapsTitle')}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">{t('overview.keyHighlights.interactiveMaps')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-sm md:text-base">{t('overview.keyHighlights.internationalizationTitle')}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">{t('overview.keyHighlights.internationalization')}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-sm md:text-base">{t('overview.keyHighlights.formValidationTitle')}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">{t('overview.keyHighlights.formValidation')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-sm md:text-base">{t('overview.keyHighlights.responsiveDesignTitle')}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">{t('overview.keyHighlights.responsiveDesign')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-sm md:text-base">{t('overview.keyHighlights.darkThemeTitle')}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">{t('overview.keyHighlights.darkTheme')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-sm md:text-base">{t('overview.keyHighlights.accessibilityTitle')}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">{t('overview.keyHighlights.accessibility')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "tech" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { name: "Next.js", icon: "next.svg", description: t('tech.stack.nextjs'), version: "15.3.0" },
                    { name: "TypeScript", icon: "ts.svg", description: t('tech.stack.typescript'), version: "5.0" },
                    { name: "Tailwind CSS", icon: "tailwind.svg", description: t('tech.stack.tailwind'), version: "4.0" },
                    { name: "Firebase", icon: "firebase.svg", description: t('tech.stack.firebase'), version: "11.6.0" },
                    { name: "React Hook Form + yup", icon: "react-hook-form.svg", description: t('tech.stack.reactHookForm'), version: "7.55.0 + 1.6.1" },
                    { name: "Google Maps API", icon: "maps.png", description: t('tech.stack.googleMaps'), version: "2.20.6" },
                    { name: "next-intl", icon: "next-intl.png", description: t('tech.stack.nextIntl'), version: "4.1.0" },
                    { name: "GitHub Actions", icon: "github-actions.png", description: t('tech.stack.githubActions'), version: "v4" },
                    { name: "Lucide React", icon: "lucide.png", description: t('tech.stack.lucide'), version: "0.487.0" },
                  ].map((tech, index) => (
                    <div key={index} className="bg-card p-3 md:p-4 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center bg-primary/10 rounded-full">
                          <Image src={`/logos/${tech.icon}`} alt={tech.name} width={30} height={30} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm md:text-base">{tech.name}</h3>
                          <span className="text-xs text-muted-foreground">{tech.version}</span>
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-semibold mb-4">{t('tech.architecture.title')}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm md:text-base">{t('tech.architecture.appRouter.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{t('tech.architecture.appRouter.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm md:text-base">{t('tech.architecture.firebase.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{t('tech.architecture.firebase.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm md:text-base">{t('tech.architecture.turbopack.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{t('tech.architecture.turbopack.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm md:text-base">{t('tech.architecture.components.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{t('tech.architecture.components.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm md:text-base">{t('tech.architecture.internationalization.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{t('tech.architecture.internationalization.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "performance" && (
              <div>
                <div className="mb-8">
                  <h3 className="text-lg md:text-xl font-semibold mb-4">{t('performance.lighthouse.title')}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {[
                      { name: t('performance.lighthouse.metrics.performance'), score: 100, color: "text-green-500" },
                      { name: t('performance.lighthouse.metrics.accessibility'), score: 100, color: "text-green-500" },
                      { name: t('performance.lighthouse.metrics.bestPractices'), score: 100, color: "text-green-500" },
                      { name: t('performance.lighthouse.metrics.seo'), score: 100, color: "text-green-500" }
                    ].map((metric, index) => (
                      <div key={index} className="bg-card p-3 md:p-4 rounded-lg shadow-sm text-center">
                        <div className={`text-2xl md:text-3xl font-bold ${metric.color}`}>{metric.score}</div>
                        <div className="text-xs md:text-sm text-muted-foreground mt-1">{metric.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-base md:text-lg font-semibold mb-4">{t('performance.metrics.title')}</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm font-medium">{t('performance.metrics.fcp.title')}</span>
                        <span className="text-xs md:text-sm text-green-500">0.2s</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm font-medium">{t('performance.metrics.lcp.title')}</span>
                        <span className="text-xs md:text-sm text-green-500">0.5s</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm font-medium">{t('performance.metrics.cls.title')}</span>
                        <span className="text-xs md:text-sm text-green-500">0</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm font-medium">{t('performance.metrics.tbt.title')}</span>
                        <span className="text-xs md:text-sm text-green-500">20ms</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm font-medium">{t('performance.metrics.speedIndex.title')}</span>
                        <span className="text-xs md:text-sm text-green-500">0.6s</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-semibold mb-4">{t('performance.optimization.title')}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-sm md:text-base">{t('performance.optimization.techniques.turbopack.title')}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">{t('performance.optimization.techniques.turbopack.description')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-sm md:text-base">{t('performance.optimization.techniques.images.title')}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">{t('performance.optimization.techniques.images.description')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-sm md:text-base">{t('performance.optimization.techniques.codeSplitting.title')}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">{t('performance.optimization.techniques.codeSplitting.description')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-sm md:text-base">{t('performance.optimization.techniques.ssg.title')}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">{t('performance.optimization.techniques.ssg.description')}</p>
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