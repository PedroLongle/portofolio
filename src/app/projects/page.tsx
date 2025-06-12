"use client"

import { useTranslations } from "@/i18n/client";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import Image from "next/image";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const homeT = useTranslations("home.projects");
  const commonT = useTranslations("common.buttons");
  
  return (
    <div className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto my-6 md:my-12 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 lg:mb-4">{t("title")}</h1>
          <p className="text-muted-foreground text-sm md:text-md lg:text-lg">
            {t("description")}
          </p>
        </div>
        
        {/* Zen Razor Project - Consolidated Grouped Section */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-card via-card to-muted/20 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] rounded-2xl"></div>
            
            {/* Header Section */}
            <div className="relative z-10 mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                    <Image src="/projects/zen-razor/logo/logo.svg" alt="Zen Razor" width={40} height={40} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text zen-razor">
                    {homeT("zenRazor.title")}
                  </h2>
                </div>
              </div>
              
              <div className="max-w-3xl">
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {homeT("zenRazor.description")}
                </p>
              </div>
            </div>
            
            {/* Divider */}
            <div className="relative mb-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-transparent via-border to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-card px-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Cards Grid */}
            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <ProjectCard 
                    title={t("zenRazor.website.shortTitle")}
                    description={t("zenRazor.website.description.short")}
                    image={`/projects/zen-razor/website/thumb.svg`}
                    link="/projects/zen-razor-website"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <ProjectCard 
                    title={t("zenRazor.backoffice.title")}
                    description={t("zenRazor.backoffice.description")}
                    image={`/projects/zen-razor/back-office/thumb.svg`}
                  />
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <ProjectCard 
                    title={t("zenRazor.backend.title")}
                    description={t("zenRazor.backend.description")}
                    image={`/projects/zen-razor/backend/thumb.png`}
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
             <div className="relative py-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-transparent via-border to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-card px-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ProjectCard 
           title={t("portofolio.title")}
           description={t("portofolio.description.short")}
            image={`/projects/portofolio/thumb.svg`}
            link="/projects/portofolio"
          />
        </div>
        
        <div className="bg-card p-4 md:p-12 rounded-xl text-center">
          <h2 className="text-3xl md:text-3xl font-bold mb-4">{t("readyToStart")}!</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("collaborateDescription")}
          </p>
          <Link href="/contact" className="btn btn-primary rounded-lg text-xs md:text-sm lg:text-md">
            {commonT("getInTouch")}
          </Link>
        </div>
      </div>
    </div>
  );
} 