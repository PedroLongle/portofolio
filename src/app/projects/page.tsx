"use client"

import { useTranslations } from "@/i18n/client";
import Link from "next/link";
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  const t = useTranslations("projects");
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
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Zen Razor</h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                Comprehensive digital ecosystem featuring a public website, administrative back-office, and robust backend infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative">
                <ProjectCard 
                  title={t("zenRazor.website.title")}
                  description={t("zenRazor.website.description")}
                  image={`/projects/zen-razor/website/thumb.svg`}
                  link="/projects/zen-razor-website"
                />
              </div>
              
              <div className="relative">
                <ProjectCard 
                  title={t("zenRazor.backoffice.title")}
                  description={t("zenRazor.backoffice.description")}
                  image={`/projects/portofolio/thumb.svg`}
                  link="/projects/zen-razor-backoffice"
                />
              </div>
              
              <div className="relative">
                <ProjectCard 
                  title={t("zenRazor.backend.title")}
                  description={t("zenRazor.backend.description")}
                  image={`/projects/portofolio/thumb.svg`}
                  link="/projects/zen-razor-backend"
                />
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