"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/i18n/client";
import { useTabWithParams } from "@/hooks/use-tabs";
import GitHubRepo from "@/components/projects/github-repo";


enum Tabs {
  REPO = "repo",
  TECH = "tech",
  PERFORMANCE = "performance"
}


export default function PortfolioProjectPage() {
  const { activeTab, handleTabChange } = useTabWithParams(Object.values(Tabs));
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
                src="/projects/portofolio/mockup.svg" 
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
                  "Next.js", 
                  "TypeScript", 
                  "Tailwind CSS", 
                  "Shadcn UI",
                  "React Hook Form + yup",
                  "NodeMailer",
                  "Firebase [App Hosting]",
                  "Google Cloud Secret Manager",
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
                    { name: "Next.js", icon: "next.svg", description: t('tech.frameworks.next'), version: "15.3.0" },
                    { name: "TypeScript", icon: "ts.svg", description: t('tech.frameworks.typescript'), version: "5.0" },
                    { name: "Tailwind CSS", icon: "tailwind.svg", description: t('tech.frameworks.tailwind'), version: "4.0" },
                    { name: "Shadcn UI", icon: "shadcn.svg", description: t('tech.frameworks.shadcn'), version: "2.1.7" },
                    { name: "React Hook Form + yup", icon: "react-hook-form.svg", description: t('tech.frameworks.rhf'), version: "7.55.0 + 1.6.1" },
                    { name: "NodeMailer", icon: "nodemailer.png", description: t('tech.frameworks.nodemailer'), version: "6.9.18" },
                    { name: "Firebase [App Hosting]", icon: "firebase.svg", description: t('tech.frameworks.firebase'), version: "11.6.0" },
                    { name: "Google Cloud Secret Manager", icon: "secret-manager.webp", description: t('tech.frameworks.secretManager'), version: "5.8.0" },
                    { name: "next-intl", icon: "next-intl.png", description: t('tech.frameworks.nextIntl'), version: "4.1.0" },
                    { name: "GitHub Actions", icon: "github-actions.png", description: t('tech.frameworks.githubActions'), version: "v4" },
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
