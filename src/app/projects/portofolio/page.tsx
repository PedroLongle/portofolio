"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "@/i18n/client";

// Custom hook to handle tab state with URL params
const useTabWithParams = (defaultTab: string) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"repo" | "tech" | "performance">(
    (searchParams.get("tab") as "repo" | "tech" | "performance") || defaultTab as any
  );

  // Update URL when tab changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", activeTab);
    router.push(`?${params.toString()}`, { scroll: false });
  }, [activeTab, router, searchParams]);

  const handleTabChange = useCallback((tab: "repo" | "tech" | "performance") => {
    setActiveTab(tab);
  }, []);

  return { activeTab, handleTabChange };
};

export default function PortfolioProjectPage() {
  const { activeTab, handleTabChange } = useTabWithParams("repo");
  const t = useTranslations('projects.portofolio');
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
              <p className="text-base md:text-lg mb-8 md:mb-12 mt-6 md:mt-8">
                {t('description.part1')}              
                <br></br>
                <br></br>
                {t('description.part2')}
                <br></br>
              </p>
            </div>
            <div className="w-full">
              <Image 
                src="/projects/portofolio/mockup.svg" 
                alt={t('imageAlt')}
                width={700}
                height={1000}
                className="object-cover pointer-events-none w-full h-auto"
              />
            </div>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12 max-w-3xl">
                {[
                  "Next.js", 
                  "TypeScript", 
                  "Tailwind CSS", 
                  "Shadcn UI",
                  "React Hook Form + yup",
                  "NodeMailer",
                  "Firebase [App Hosting]",
                  "Google Cloud Secret Manager",
                  "next-intl"
                ].map((tech, index) => (
                  <button 
                    key={index}
                    onClick={() => handleTabChange("tech")}
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
                onClick={() => handleTabChange("repo")}
                className={`py-3 md:py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "repo"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <a className="mx-2 md:mx-4">{t('tabs.repo')}</a>
              </button>
              <button
                onClick={() => handleTabChange("tech")}
                className={`py-3 md:py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "tech"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <a className="mx-2 md:mx-4">{t('tabs.tech')}</a>
              </button>
              <button
                onClick={() => handleTabChange("performance")}
                className={`py-3 md:py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "performance"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <a className="mx-2 md:mx-4">{t('tabs.performance')}</a>
              </button>
            </nav>
          </div>
          
          {/* Tab content */}
          <div className="min-h-[400px]">
            {activeTab === "repo" && (
              <div>
                <div className="bg-card rounded-lg shadow-sm mb-8 p-4 md:p-6">
                  <div className="flex items-center mb-4">
                    <svg className="w-5 md:w-6 h-5 md:h-6 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <h2 className="text-lg md:text-xl font-semibold">{t('repo.title')}</h2>
                  </div>
                  <p className="mb-4 text-sm md:text-base">{t('repo.description')}</p>
                  <a 
                    href="https://github.com/PedroLongle/portofolio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm"
                  >
                    {t('repo.viewButton')}
                    <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-card p-2 md:p-4 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-semibold mb-3">{t('keyFeatures.title')}</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground text-sm md:text-base">
                    <li>{t('keyFeatures.features.responsive')}</li>
                    <li>{t('keyFeatures.features.i18n')}</li>
                    <li>{t('keyFeatures.features.darkMode')}</li>
                    <li>{t('keyFeatures.features.contactForm')}</li>
                    <li>{t('keyFeatures.features.portfolio')}</li>
                    <li>{t('keyFeatures.features.performance')}</li>
                    <li>{t('keyFeatures.features.seo')}</li>
                    <li>{t('keyFeatures.features.analytics')}</li>
                    <li>{t('keyFeatures.features.cicd')}</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === "tech" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { name: "Next.js", icon: "next.svg", description: t('tech.frameworks.next') },
                    { name: "TypeScript", icon: "ts.svg", description: t('tech.frameworks.typescript') },
                    { name: "Tailwind CSS", icon: "tailwind.svg", description: t('tech.frameworks.tailwind') },
                    { name: "Shadcn UI", icon: "shadcn.svg", description: t('tech.frameworks.shadcn') },
                    { name: "React Hook Form + yup", icon: "react-hook-form.svg", description: t('tech.frameworks.rhf') },
                    { name: "NodeMailer", icon: "nodemailer.png", description: t('tech.frameworks.nodemailer') },
                    { name: "Firebase [App Hosting]", icon: "firebase.svg", description: t('tech.frameworks.firebase') },
                    { name: "Google Cloud Secret Manager", icon: "secret-manager.webp", description: t('tech.frameworks.secretManager') },
                    { name: "next-intl", icon: "next-intl.png", description: t('tech.frameworks.nextIntl') },
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
                
                <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-semibold mb-4">{t('architecture.title')}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm md:text-base">{t('architecture.features.component.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{t('architecture.features.component.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm md:text-base">{t('architecture.features.serverComponents.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{t('architecture.features.serverComponents.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm md:text-base">{t('architecture.features.ssg.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{t('architecture.features.ssg.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm md:text-base">{t('architecture.features.i18n.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{t('architecture.features.i18n.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm md:text-base">{t('architecture.features.cicd.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{t('architecture.features.cicd.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm md:text-base">{t('architecture.features.analytics.title')}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{t('architecture.features.analytics.description')}</p>
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
                      { name: t('performance.lighthouse.metrics.performance'), score: 98, color: "text-green-500" },
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
                        <span className="text-xs md:text-sm text-green-500">0.8s</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm font-medium">{t('performance.metrics.lcp.title')}</span>
                        <span className="text-xs md:text-sm text-green-500">1.2s</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm font-medium">{t('performance.metrics.cls.title')}</span>
                        <span className="text-xs md:text-sm text-green-500">0.01</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm font-medium">{t('performance.metrics.tbt.title')}</span>
                        <span className="text-xs md:text-sm text-green-500">0ms</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "100%" }}></div>
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
                        <h4 className="font-medium text-sm md:text-base">{t('performance.optimization.techniques.fonts.title')}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">{t('performance.optimization.techniques.fonts.description')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-sm md:text-base">{t('performance.optimization.techniques.responsive.title')}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">{t('performance.optimization.techniques.responsive.description')}</p>
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
