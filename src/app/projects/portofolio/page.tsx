"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/i18n/client";

export default function PortfolioProjectPage() {
  const [activeTab, setActiveTab] = useState<"repo" | "tech" | "performance">("repo");

  return (
    <div className="section" style={{ paddingTop: "8rem" }}>
      <div className="container">
        <div className="mx-auto">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>

          <h1 className="text-4xl font-bold mb-6">Personal Portfolio</h1>
          
          <div className="relative h-96 w-full mb-8 overflow-hidden rounded-xl">
            <Image 
              src="/projects/portofolio.png" 
              alt="Portfolio Project"
              fill
              className="object-cover pointer-events-none"
            />
          </div>
          
          <p className="text-lg mb-10">
            A modern, responsive portfolio website built with Next.js and Tailwind CSS. This project showcases my work, skills, and services while providing multiple ways for potential clients to contact me.
          </p>
          
          {/* Tabs */}
          <div className=" dark:border-gray-700 mb-8">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("repo")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "repo"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Repository
              </button>
              <button
                onClick={() => setActiveTab("tech")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "tech"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Tech Stack
              </button>
              <button
                onClick={() => setActiveTab("performance")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "performance"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                Performance Analysis
              </button>
            </nav>
          </div>
          
          {/* Tab content */}
          <div className="min-h-[400px]">
            {activeTab === "repo" && (
              <div>
                <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <h2 className="text-xl font-semibold">GitHub Repository</h2>
                  </div>
                  <p className="mb-4">The complete source code for this portfolio is available on GitHub. Feel free to explore the code structure, components, and implementation details.</p>
                  <a 
                    href="https://github.com/yourusername/portfolio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    View Code on GitHub
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Responsive design that works on all devices</li>
                    <li>Internationalization supporting multiple languages</li>
                    <li>Dark/light mode implementation</li>
                    <li>Contact form with validation</li>
                    <li>Project portfolio with detailed case studies</li>
                    <li>Optimized performance and accessibility</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === "tech" && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { name: "Next.js", icon: "nextjs.svg", description: "React framework for production" },
                    { name: "TypeScript", icon: "typescript.svg", description: "Typed JavaScript for better code quality" },
                    { name: "Tailwind CSS", icon: "tailwind.svg", description: "Utility-first CSS framework" },
                    { name: "React", icon: "react.svg", description: "UI component library" },
                    { name: "Framer Motion", icon: "framer.svg", description: "Animation library" },
                    { name: "Vercel", icon: "vercel.svg", description: "Deployment platform" }
                  ].map((tech, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full">
                          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
                          </svg>
                        </div>
                        <h3 className="font-medium">{tech.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Architecture Highlights</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Component-Based Structure</h4>
                      <p className="text-sm text-muted-foreground">Modular components designed for reusability and maintainability.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Server Components + Client Components</h4>
                      <p className="text-sm text-muted-foreground">Strategic use of React Server Components for improved performance.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Static Site Generation</h4>
                      <p className="text-sm text-muted-foreground">Pre-rendered pages for optimal loading speed and SEO benefits.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Internationalization</h4>
                      <p className="text-sm text-muted-foreground">Custom i18n implementation for multi-language support.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "performance" && (
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Lighthouse Analysis</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: "Performance", score: 98, color: "text-green-500" },
                      { name: "Accessibility", score: 100, color: "text-green-500" },
                      { name: "Best Practices", score: 100, color: "text-green-500" },
                      { name: "SEO", score: 100, color: "text-green-500" }
                    ].map((metric, index) => (
                      <div key={index} className="bg-card p-4 rounded-lg shadow-sm text-center">
                        <div className={`text-3xl font-bold ${metric.color}`}>{metric.score}</div>
                        <div className="text-sm text-muted-foreground mt-1">{metric.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-lg font-semibold mb-4">Key Performance Metrics</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">First Contentful Paint</span>
                        <span className="text-sm text-green-500">0.8s</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Largest Contentful Paint</span>
                        <span className="text-sm text-green-500">1.2s</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Cumulative Layout Shift</span>
                        <span className="text-sm text-green-500">0.01</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Total Blocking Time</span>
                        <span className="text-sm text-green-500">0ms</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Optimization Techniques</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium">Image Optimization</h4>
                        <p className="text-sm text-muted-foreground">Using Next.js Image component for optimal loading and formats.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium">Code Splitting</h4>
                        <p className="text-sm text-muted-foreground">Automatic code splitting for optimal bundle sizes.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium">Font Optimization</h4>
                        <p className="text-sm text-muted-foreground">Using next/font with subsets and display swap.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium">Responsive Design</h4>
                        <p className="text-sm text-muted-foreground">Mobile-first approach with tailwind breakpoints.</p>
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
