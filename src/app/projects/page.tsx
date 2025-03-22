"use client";

import { useTranslations } from "@/i18n/client";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const commonT = useTranslations("common.buttons");
  
  return (
    <div className="section pt-6">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
          <p className="text-muted-foreground text-lg">
            {t("description")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ProjectCard 
            title={"Personal Portofolio"} 
            description={"Personal portofolio website."}
            image="/projects/portofolio.png" 
            link="/projects/portofolio"
          />
          <ProjectCard 
            title={"to-be-announced"} 
            description={"to-be-announced"}
            image="https://placehold.co/100x100/333/FFF?text=tba" 
            link="/projects/tba"
          />
          <ProjectCard 
            title={"to-be-announced"} 
            description={"to-be-announced"}
            image="https://placehold.co/100x100/333/FFF?text=tba" 
            link="/projects/tba"
          />
          <ProjectCard 
            title={"to-be-announced"} 
            description={"to-be-announced"}
            image="https://placehold.co/100x100/333/FFF?text=tba" 
            link="/projects/tba"
          />
          <ProjectCard 
            title={"to-be-announced"} 
            description={"to-be-announced"}
            image="https://placehold.co/100x100/333/FFF?text=tba" 
            link="/projects/tba"
          />
          <ProjectCard 
            title={"to-be-announced"} 
            description={"to-be-announced"}
            image="https://placehold.co/100x100/333/FFF?text=tba" 
            link="/projects/tba"
          />
          
        </div>
        
        <div className="bg-card p-12 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">{t("readyToStart")}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("collaborateDescription")}
          </p>
          <Link href="/contact" className="btn btn-primary rounded-lg">
            {commonT("getInTouch")}
          </Link>
        </div>
      </div>
    </div>
  );
} 