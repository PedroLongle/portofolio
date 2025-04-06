"use client";

import { useTranslations } from "@/i18n/client";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { useLocale } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const commonT = useTranslations("common.buttons");

  const locale = useLocale();
  
  return (
    <div className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto my-6 md:my-12 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 lg:mb-4">{t("title")}</h1>
          <p className="text-muted-foreground text-sm md:text-md lg:text-lg">
            {t("description")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ProjectCard 
           title={t("portofolio.title")}
           description={t("portofolio.description.short")}
            image={`/projects/portofolio/${locale}/thumb.svg`}
            link="/projects/portofolio"
          />
          <ProjectCard 
            title={t("tba.title")}
            description={t("tba.description")}
            image={`/projects/tba/${locale}/macbook.svg`}
          />
          <ProjectCard 
            title={t("tba.title")}
            description={t("tba.description")}
            image={`/projects/tba/${locale}/mobile-2.svg`}
          />
          <ProjectCard 
            title={t("tba.title")}
            description={t("tba.description")}
            image={`/projects/tba/${locale}/tablet.svg`}
          />
          <ProjectCard 
            title={t("tba.title")}
            description={t("tba.description")}
            image={`/projects/tba/${locale}/mobile.svg`}
          />
          <ProjectCard 
            title={t("tba.title")}
            description={t("tba.description")}
            image={`/projects/tba/${locale}/macbook-2.svg`}
          />
          
        </div>
        
        <div className="bg-card p-4 md:p-12 rounded-xl text-center">
          <h2 className="text-3xl md:text-3xl font-bold mb-4">{t("readyToStart")}!</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("collaborateDescription")}
          </p>
          <Link href="/contact" className="btn btn-primary rounded-lg text-xs md:text-base">
            {commonT("getInTouch")}
          </Link>
        </div>
      </div>
    </div>
  );
} 