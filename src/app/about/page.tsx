"use client";

import Image from "next/image";
import { useTranslations } from "@/i18n/client";

export default function AboutPage() {
  const t = useTranslations('about');
  
  return (
    <div className="section" style={{ paddingTop: '8rem' }}>
      <div className="container">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-32 mb-20">
          <div className="lg:w-2/5">
            <div className="relative w-full h-0" style={{ paddingBottom: '100%' }}>
              <Image 
                src="/images/coding.svg" 
                alt={t('heroImageAlt')}
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectPosition: 'center top' }}
                priority
              />
            </div>
          </div>
          <div className="lg:w-3/5 space-y-6">
            <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
            <p className="text-lg text-muted-foreground">
              {t('introduction')}
            </p>
            <p className="text-lg text-muted-foreground">
              {t('mission')}
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold mb-2">{t('education.title')}</h3>
                <ul className="space-y-3">
                  <li>
                    <div className="text-md font-medium">{t('education.degree1')}</div>
                    <div className="text-sm text-muted-foreground">{t('education.school1')}</div>
                    <div className="text-sm text-muted-foreground">{t('education.year1')}</div>
                  </li>
                  <li>
                    <div className="text-md font-medium">{t('education.degree2')}</div>
                    <div className="text-sm text-muted-foreground">{t('education.school2')}</div>
                    <div className="text-sm text-muted-foreground">{t('education.year2')}</div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t('languages.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span>{t('languages.english')}</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                      ))}
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>{t('languages.portuguese')}</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                      ))}
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>{t('languages.spanish')}</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
                      ))}
                      <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">{t('experience.title')}</h2>
          <div className="space-y-14">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold">{t('experience.job1.title')}</h3>
                <div className="text-muted-foreground">{t('experience.job1.company')}</div>
                <div className="text-sm text-muted-foreground">{t('experience.job1.period')}</div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-muted-foreground mb-4">
                  {t('experience.job1.description')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t('experience.job1.bullet1')}</li>
                  <li>{t('experience.job1.bullet2')}</li>
                  <li>{t('experience.job1.bullet3')}</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold">{t('experience.job2.title')}</h3>
                <div className="text-muted-foreground">{t('experience.job2.company')}</div>
                <div className="text-sm text-muted-foreground">{t('experience.job2.period')}</div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-muted-foreground mb-4">
                  {t('experience.job2.description')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t('experience.job2.bullet1')}</li>
                  <li>{t('experience.job2.bullet2')}</li>
                  <li>{t('experience.job2.bullet3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8">{t('skills.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('skills.technical.title')}</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>JavaScript / TypeScript</span>
                    <span>95%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>React / Next.js</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Node.js</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Python</span>
                    <span>80%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Docker / Kubernetes</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t('skills.soft.title')}</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>{t('skills.soft.communication')}</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>{t('skills.soft.teamwork')}</span>
                    <span>95%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>{t('skills.soft.problemSolving')}</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>{t('skills.soft.creativity')}</span>
                    <span>80%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>{t('skills.soft.leadership')}</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 