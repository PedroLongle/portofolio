"use client";

import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { StatsCounter } from "@/components/stats-counter";
import { useTranslations } from "@/i18n/client";

export default function Home() {
  const homeT = useTranslations('home');
  const commonT = useTranslations('common');
  const projectsT = useTranslations('projects');

  return (
    <div className="mt-12">
      {/* Hero Section */}
      <section className="section">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-primary uppercase tracking-wider text-sm font-medium">
              {homeT('greeting')}
            </h2>
            <h1 className="text-6xl font-bold">{homeT('title')}</h1>
            <p className="text-muted-foreground max-w-lg">
              {homeT('description')}
            </p>
            <Link href="/about" className="btn btn-primary rounded-lg">
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
              isHighlighted={false}
            />
            <ServiceCard 
              title={homeT('skills.backendDevelopment.title')} 
              icon={
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              }
              description={homeT('skills.backendDevelopment.description')}
              isHighlighted={true}
            />
            <ServiceCard 
              title={homeT('skills.security.title')} 
              icon={
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              }
              description={homeT('skills.security.description')}
              isHighlighted={false}
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
              <p className="text-muted-foreground mt-2">{projectsT('description')}</p>
            </div>
            <Link href="/projects" className="btn btn-primary items-center rounded-lg pl-6 h-12 mt-6">
              {commonT('buttons.viewAll')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ProjectCard 
              title={"Personal Portofolio"} 
              description={"Personal portofolio website."}
              image="/projects/portofolio/thumb.svg" 
              link="/projects/portofolio"
            />
            <ProjectCard 
              title={"to-be-announced"} 
              description={"to-be-announced"}
              image="https://placehold.co/100x100/333/FFF?text=tba" 
              link="/projects/tba"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold">{projectsT('readyToStart')}!</h2>
            <Link href="/contact" className="btn btn-primary rounded-lg">
              {commonT('buttons.getInTouch')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, icon, description, isHighlighted }: { 
  title: string; 
  icon: React.ReactNode; 
  description: string;
  isHighlighted: boolean;
}) {
  return (
    <div className={`card ${isHighlighted ? 'card-red' : ''}`}>
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`${isHighlighted ? 'text-gray-100' : 'text-muted-foreground'} mb-4`}>{description}</p>
      <Link href="/about" className="flex items-center text-sm font-medium uppercase">
        KNOW MORE 
        <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
}
