"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/i18n/client";
import { useTabWithParams } from "@/hooks/use-tabs";

enum Tabs {
  OVERVIEW = "overview",
  TECH = "tech",
  ARCHITECTURE = "architecture"
}

export default function ZenRazorBackendPage() {
  const { activeTab, handleTabChange } = useTabWithParams(Object.values(Tabs));
  const t = useTranslations('projects.zenRazor.backend');
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
                src="/projects/zen-razor/backend-mockup.svg" 
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
                  "Node.js", 
                  "Express.js", 
                  "TypeScript", 
                  "PostgreSQL",
                  "Redis",
                  "Docker",
                  "Microservices",
                  "RESTful APIs"
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
                onClick={() => handleTabChange(Tabs.ARCHITECTURE)}
                className={`py-3 md:py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "architecture"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                <span className="mx-2 md:mx-4 block">Architecture</span>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    <h2 className="text-lg md:text-xl font-semibold">Backend Infrastructure</h2>
                  </div>
                  <p className="mb-4 text-sm md:text-base">
                    The Zen Razor backend serves as the foundation of the entire ecosystem, providing secure, scalable, and reliable API services. Built with modern architectural patterns and best practices to ensure optimal performance and maintainability.
                  </p>
                </div>
                
                <div className="bg-card p-2 md:p-4 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-semibold mb-3">Core Capabilities</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground text-sm md:text-base">
                    <li>RESTful API endpoints with comprehensive documentation</li>
                    <li>User authentication and authorization with JWT tokens</li>
                    <li>Database management with PostgreSQL and Redis caching</li>
                    <li>File upload and storage with cloud integration</li>
                    <li>Email services and notification systems</li>
                    <li>Payment processing and transaction management</li>
                    <li>Automated testing and continuous integration</li>
                    <li>Monitoring, logging, and performance analytics</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === "tech" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {[
                    { name: "Node.js", icon: "node.svg", description: "JavaScript runtime for scalable server-side applications" },
                    { name: "Express.js", icon: "express.svg", description: "Fast and minimalist web framework for Node.js" },
                    { name: "TypeScript", icon: "ts.svg", description: "Type-safe JavaScript for robust backend development" },
                    { name: "PostgreSQL", icon: "postgresql.svg", description: "Advanced open-source relational database system" },
                    { name: "Redis", icon: "redis.svg", description: "In-memory data structure store for caching and sessions" },
                    { name: "Docker", icon: "docker.svg", description: "Containerization platform for consistent deployments" },
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
            
            {activeTab === "architecture" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
                    <h3 className="text-base md:text-lg font-semibold mb-4">System Design</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Microservices Architecture</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Modular services for scalability and maintainability</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Database Optimization</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Efficient data modeling with caching strategies</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Security Implementation</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Comprehensive security measures and data protection</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
                    <h3 className="text-base md:text-lg font-semibold mb-4">DevOps & Deployment</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">CI/CD Pipeline</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Automated testing, building, and deployment processes</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Container Orchestration</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Docker containers with Kubernetes for scaling</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <div>
                          <h4 className="font-medium text-sm md:text-base">Monitoring & Logging</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Real-time performance monitoring and error tracking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-semibold mb-4">API Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border border-border rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">API Endpoints</div>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">&lt;200ms</div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
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