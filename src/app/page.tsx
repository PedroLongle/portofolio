"use client";

import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { StatsCounter } from "@/components/stats-counter";
import { useTranslations } from "@/i18n/client";
import { useLocale } from "next-intl";
import { cn } from "@/utils";

export default function Home() {
  const homeT = useTranslations('home');
  const commonT = useTranslations('common');
  const projectsT = useTranslations('projects');

  const locale = useLocale();

  return (
    <div className="mt-12">
      {/* Hero Section */}
      <section className="section">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-4 md:space-y-6">
            <h2 className="text-primary uppercase tracking-wider text-sm md:text-md font-medium">
              {homeT('greeting')}
            </h2>
            <h1 className="text-3xl md:text-6xl font-bold">{homeT('title')}</h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg">
              {homeT('description')}
            </p>
            <Link href="/about" className="btn btn-primary rounded-lg text-xs md:text-base">
              {commonT('buttons.aboutMe')}
            </Link>
          </div>
          <div className="lg:w-1/2">
            <Image 
              src="/illustrations/home.svg"
              alt={homeT('heroImageAlt')} 
              width={600} 
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title={homeT('skills.frontendDevelopment.title')} 
              icon={
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              }
              description={homeT('skills.frontendDevelopment.description')}
            />
            <ServiceCard 
              title={homeT('skills.backendDevelopment.title')} 
              icon={
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
              }
              description={homeT('skills.backendDevelopment.description')}
            />
            <ServiceCard 
              title={homeT('skills.security.title')} 
              icon={
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              }
              description={homeT('skills.security.description')}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <StatsCounter />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="flex justify-between items-center mb-20 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold uppercase">{homeT('projects.title')}</h2>
              <p className="text-muted-foreground mt-4 md:mt-2">{projectsT('description')}</p>
            </div>
            <Link href="/projects" className="btn btn-primary rounded-lg text-xs md:text-base">
              {commonT('buttons.viewAll')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ProjectCard 
              title={projectsT("portofolio.title")}
              description={projectsT("portofolio.description.short")}
              image={`/projects/portofolio/${locale}/thumb.svg`}
              link="/projects/portofolio"
            />
            <ProjectCard 
              title={projectsT("tba.title")}
              description={projectsT("tba.description")}
              image={`/projects/tba/${locale}/macbook.svg`}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold">{projectsT('readyToStart')}!</h2>
            <Link href="/contact" className="btn btn-primary rounded-lg text-xs md:text-base">
              {commonT('buttons.getInTouch')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, icon, description }: { 
  title: string; 
  icon: React.ReactNode; 
  description: string;
}) {
  return (
    <div className="p-1 md:p-10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-red-700 cursor-pointer">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className={`text-muted-foreground mb-4 text-white`}>{description}</p>
      <Link href="/about" className={`flex items-center text-sm font-medium uppercase text-white hover:text-white/80`}>
        KNOW MORE 
        <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
}
