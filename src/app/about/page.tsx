"use client";

import Image from "next/image";
import { useTranslations } from "@/i18n/client";
import { Building, Calendar, House } from "lucide-react";
import Link from "@/components/link";


export default function AboutPage() {
  const t = useTranslations('about');
  
  return (
    <div className="section">
      <div className="container">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32 mb-12 lg:mb-20 mt-6 lg:mt-12">
          <div className="w-full lg:w-2/5 max-w-sm mx-auto lg:mx-0">
            <div className="relative w-full h-0" style={{ paddingBottom: '100%' }}>
              <Image 
                src="/illustrations/coding.svg" 
                alt={t('heroImageAlt')}
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectPosition: 'center top' }}
                priority
              />
            </div>
          </div>
          <div className="w-full space-y-4 lg:space-y-6 mt-8 lg:mt-0">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">{t('title')}</h1>
            <p className="text-base lg:text-lg text-muted-foreground">
              {t('introduction')}
            </p>
            <p className="text-base lg:text-lg text-muted-foreground">
              {t('mission')}
            </p>
            <div className="gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2 mt-8 lg:mt-12">{t('education.title')}</h3>
                <ul className="space-y-8 md:space-y-5">
                  <li>
                    <div className="inline-flex flex-col gap-2 md:gap-1">
                      <Link isExternal href={t('education.degree1Link')} weight="medium" className="text-sm md:text-base">
                        {t('education.degree1')}
                      </Link>
                      <div className="flex flex-row items-center gap-2 mt-1">
                        <House className="w-4 h-4 hidden md:flex" />
                        <Link isExternal href={t('education.school1Link')} className="text-xs md:text-sm">
                          {t('education.school1')}
                        </Link>
                      </div>
                      <div className="flex flex-row items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4" />
                        <div className="text-xs md:text-sm text-muted-foreground">{t('education.year1')}</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex flex-col gap-2 md:gap-1">
                      <Link isExternal href={t('education.degree2Link')} weight="medium" className="text-sm md:text-base">
                        {t('education.degree2')}
                      </Link>
                      <div className="flex flex-row items-center gap-2 mt-1">
                        <House className="w-4 h-4 hidden md:flex" />
                        <Link isExternal href={t('education.school2Link')} className="text-xs md:text-sm">
                          {t('education.school2')}
                        </Link>
                      </div>
                      <div className="flex flex-row items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4" />
                        <div className="text-xs md:text-sm text-muted-foreground">{t('education.year2')}</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="mb-12 lg:mb-20">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-8">{t('experience.title')}</h2>
          <div className="space-y-10 lg:space-y-14">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-md lg:text-lg font-bold mb-2">{t('experience.job1.title')}</h3>
                <div className="flex flex-row items-center gap-2 mt-2">
                  <Building className="w-4 h-4 hidden md:flex" />
                  <Link isExternal href={t('experience.job1.link')} className="text-xs md:text-sm text-muted-foreground">{t('experience.job1.company')}</Link>
                </div>
                <div className="flex flex-row items-center gap-2 mt-2">
                  <Calendar className="w-4 h-4 " />
                  <div className="text-xs md:text-sm text-muted-foreground">{t('experience.job1.period')}</div>
                </div>
              </div>
              <div className="md:w-2/3 text-sm md:text-md text-muted-foreground">
                <div className="mb-4">
                  <p>{t('experience.job1.description')}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 lg:ml-10 mt-2">
                    <li>{t('experience.job1.descriptionBullet1')}</li>
                    <li>{t('experience.job1.descriptionBullet2')}</li>
                </ul>
                </div>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>{t('experience.job1.bullet1')}.</li>
                  <li>{t('experience.job1.bullet2')}.</li>
                  <li>{t('experience.job1.bullet3')}.</li>
                  <li>{t('experience.job1.bullet4')}.</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-md lg:text-lg font-bold mb-2">{t('experience.job2.title')}</h3>
                <div className="text-muted-foreground mt-2">
                  <div className="flex flex-row items-center gap-2">
                    <Building className="w-4 h-4" />
                    <Link isExternal href={t('experience.job2.link')} className="text-sm">{t('experience.job2.company')}</Link>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2 mt-2">
                    <Calendar className="w-4 h-4" />
                    <div className="text-sm text-muted-foreground">{t('experience.job2.period')}</div>
                </div>
              </div>
              <div className="md:w-2/3 text-sm md:text-md text-muted-foreground">
                <p className="mb-4">
                  {t('experience.job2.description')}
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>{t('experience.job2.bullet1')}.</li>
                  <li>{t('experience.job2.bullet2')}.</li>
                  <li>{t('experience.job2.bullet3')}.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h3 className="text-md lg:text-lg font-bold mb-2">{t('experience.job3.title')}</h3>
                <div className="text-muted-foreground mt-2">
                  <div className="flex flex-row items-center gap-2">
                    <Building className="w-4 h-4" />
                    <div className="text-sm">{t('experience.job3.company')}</div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2 mt-2">
                    <Calendar className="w-4 h-4" />
                    <div className="text-sm text-muted-foreground">{t('experience.job3.period')}</div>
                </div>
              </div>
              <div className="md:w-2/3 text-sm md:text-md text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>{t('experience.job3.bullet1')}.</li>
                  <li>{t('experience.job3.bullet2')}.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mb-12 lg:mb-20">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-8">{t('skills.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('skills.technical.title')}</h3>
              <div className="space-y-4">
                {[
                    { name: "Node.js", score: 85, color: "text-green-500" },
                    { name: "React", score: 90, color: "text-green-500" },
                    { name: "Next.js", score: 95, color: "text-green-500" },
                    { name: "Typescript", score: 100, color: "text-green-500" },
                    { name: "Flutter", score: 95, color: "text-green-500" },
                  ].map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{metric.name}</span>
                        <span className="text-sm text-green-500">{metric.score}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${metric.score}%` }}></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t('skills.soft.title')}</h3>
              <div className="space-y-4">
              {[
                    { name: t('skills.soft.communication'), score: 90, color: "text-green-500" },
                    { name: t('skills.soft.teamwork'), score: 95, color: "text-green-500" },
                    { name: t('skills.soft.problemSolving'), score: 90, color: "text-green-500" },
                    { name: t('skills.soft.creativity'), score: 95, color: "text-green-500" },
                    { name: t('skills.soft.organization'), score: 95, color: "text-green-500" },
                  ].map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{metric.name}</span>
                        <span className="text-sm text-green-700">{metric.score}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-green-700 h-2.5 rounded-full" style={{ width: `${metric.score}%` }}></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className="mb-12 lg:mb-20">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t('certifications.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 justify-items-start">

            {/* Certificate 5 - September 2025 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-xs">
              <div className="relative h-64 bg-muted overflow-hidden group">
                <Link 
                  href={t('certifications.cert5.credlyLink')}
                  target="_blank"
                  className="block w-full h-full"
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="text-white font-medium bg-primary/80 px-3 py-1 rounded-md">
                      {t('certifications.cert5.verify')}
                    </span>
                  </div>
                  <Image 
                    src="/certificates/responsible-ai-for-developers.png" 
                    alt={t('certifications.cert5.imageAlt')}
                    width={250}
                    height={150}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{t('certifications.cert5.title')}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-sm text-muted-foreground mr-1">{t('certifications.issuedBy')}:</span>
                  <Link 
                    href={t('certifications.cert5.issuerLink')} 
                    className="text-sm text-muted-foreground hover:text-primary"
                    isExternal
                  >
                    {t('certifications.cert5.issuer')}
                  </Link>
                </div>
                <div className="flex flex-row items-center mb-4 gap-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <p className="text-sm text-muted-foreground">{t('certifications.cert5.date')}</p>
                </div>
                <Link 
                  href={t('certifications.cert5.credlyLink')}
                  isExternal
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  {t('certifications.cert5.verify')}
                </Link>
              </div>
            </div>

            {/* Certificate 6 - September 2025 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-xs">
              <div className="relative h-64 bg-muted overflow-hidden group">
                <Link 
                  href={t('certifications.cert6.credlyLink')}
                  target="_blank"
                  className="block w-full h-full"
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="text-white font-medium bg-primary/80 px-3 py-1 rounded-md">
                      {t('certifications.cert6.verify')}
                    </span>
                  </div>
                  <Image 
                    src="/certificates/google-business-intelligence-certificate.png" 
                    alt={t('certifications.cert6.imageAlt')}
                    width={350}
                    height={150}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{t('certifications.cert6.title')}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-sm text-muted-foreground mr-1">{t('certifications.issuedBy')}:</span>
                  <Link 
                    href={t('certifications.cert6.issuerLink')} 
                    className="text-sm text-muted-foreground hover:text-primary"
                    isExternal
                  >
                    {t('certifications.cert6.issuer')}
                  </Link>
                </div>
                <div className="flex flex-row items-center mb-4 gap-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <p className="text-sm text-muted-foreground">{t('certifications.cert6.date')}</p>
                </div>
                <Link 
                  href={t('certifications.cert6.credlyLink')}
                  isExternal
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  {t('certifications.cert6.verify')}
                </Link>
              </div>
            </div>

            {/* Certificate 7 - September 2025 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-xs">
              <div className="relative h-64 bg-muted overflow-hidden group">
                <Link 
                  href={t('certifications.cert7.credlyLink')}
                  target="_blank"
                  className="block w-full h-full"
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="text-white font-medium bg-primary/80 px-3 py-1 rounded-md">
                      {t('certifications.cert7.verify')}
                    </span>
                  </div>
                  <Image 
                    src="/certificates/generative-ai-essentials-for-software-developers.png" 
                    alt={t('certifications.cert7.imageAlt')}
                    width={250}
                    height={150}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{t('certifications.cert7.title')}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-sm text-muted-foreground mr-1">{t('certifications.issuedBy')}:</span>
                  <Link 
                    href={t('certifications.cert7.issuerLink')} 
                    className="text-sm text-muted-foreground hover:text-primary"
                    isExternal
                  >
                    {t('certifications.cert7.issuer')}
                  </Link>
                </div>
                <div className="flex flex-row items-center mb-4 gap-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <p className="text-sm text-muted-foreground">{t('certifications.cert7.date')}</p>
                </div>
                <Link 
                  href={t('certifications.cert7.credlyLink')}
                  isExternal
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  {t('certifications.cert7.verify')}
                </Link>
              </div>
            </div>

            {/* Certificate 4 - July 2025 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-xs">
              <div className="relative h-64 bg-muted overflow-hidden group">
                <Link 
                  href={t('certifications.cert4.credlyLink')}
                  target="_blank"
                  className="block w-full h-full"
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="text-white font-medium bg-primary/80 px-3 py-1 rounded-md">
                      {t('certifications.cert4.verify')}
                    </span>
                  </div>
                  <Image 
                    src="/certificates/bootcamp-innovaition-building-the-future-of-product.png" 
                    alt={t('certifications.cert4.imageAlt')}
                    width={250}
                    height={150}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{t('certifications.cert4.title')}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-sm text-muted-foreground mr-1">{t('certifications.issuedBy')}:</span>
                  <Link 
                    href={t('certifications.cert4.issuerLink')} 
                    className="text-sm text-muted-foreground hover:text-primary"
                    isExternal
                  >
                    {t('certifications.cert4.issuer')}
                  </Link>
                </div>
                <div className="flex flex-row items-center mb-4 gap-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <p className="text-sm text-muted-foreground">{t('certifications.cert4.date')}</p>
                </div>
                <Link 
                  href={t('certifications.cert4.credlyLink')}
                  isExternal
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  {t('certifications.cert4.verify')}
                </Link>
              </div>
            </div>

            {/* Certificate 2 - June 2025 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-xs">
              <div className="relative w-full h-64 bg-muted overflow-hidden group">
                <Link 
                  href={t('certifications.cert2.credlyLink')}
                  target="_blank"
                  className="block w-full h-full"
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="text-white font-medium bg-primary/80 px-3 py-1 rounded-md">
                      {t('certifications.cert2.verify')}
                    </span>
                  </div>
                  <Image 
                    src="/certificates/google-prompting-essentials.png" 
                    alt={t('certifications.cert2.imageAlt')}
                    width={350}
                    height={150}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{t('certifications.cert2.title')}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-sm text-muted-foreground mr-1">{t('certifications.issuedBy')}:</span>
                  <Link 
                    href={t('certifications.cert2.issuerLink')} 
                    className="text-sm text-muted-foreground hover:text-primary"
                    isExternal
                  >
                    {t('certifications.cert2.issuer')}
                  </Link>
                </div>
                <div className="flex flex-row items-center mb-4 gap-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <p className="text-sm text-muted-foreground">{t('certifications.cert2.date')}</p>
                </div>
                <Link 
                  href={t('certifications.cert2.credlyLink')}
                  isExternal
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  {t('certifications.cert2.verify')}
                </Link>
              </div>
            </div>

            {/* Certificate 3 - June 2025 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-xs">
              <div className="relative h-64 bg-muted overflow-hidden group">
                <Link 
                  href={t('certifications.cert3.credlyLink')}
                  target="_blank"
                  className="block w-full h-full"
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="text-white font-medium bg-primary/80 px-3 py-1 rounded-md">
                      {t('certifications.cert3.verify')}
                    </span>
                  </div>
                  <Image 
                    src="/certificates/google-agile-essentials.png" 
                    alt={t('certifications.cert3.imageAlt')}
                    width={350}
                    height={150}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{t('certifications.cert3.title')}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-sm text-muted-foreground mr-1">{t('certifications.issuedBy')}:</span>
                  <Link 
                    href={t('certifications.cert3.issuerLink')} 
                    className="text-sm text-muted-foreground hover:text-primary"
                    isExternal
                  >
                    {t('certifications.cert3.issuer')}
                  </Link>
                </div>
                <div className="flex flex-row items-center mb-4 gap-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <p className="text-sm text-muted-foreground">{t('certifications.cert3.date')}</p>
                </div>
                <Link 
                  href={t('certifications.cert3.credlyLink')}
                  isExternal
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  {t('certifications.cert3.verify')}
                </Link>
              </div>
            </div>

            {/* Certificate 1 - October 2024 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow max-w-xs">
              <div className="relative h-64 bg-muted overflow-hidden group">
                <Link 
                  href={t('certifications.cert1.credlyLink')}
                  target="_blank"
                  className="block w-full h-full"
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="text-white font-medium bg-primary/80 px-3 py-1 rounded-md">
                      {t('certifications.cert1.verify')}
                    </span>
                  </div>
                  <Image 
                    src="/certificates/google-ai-essentials.png" 
                    alt={t('certifications.cert1.imageAlt')}
                    width={350}
                    height={150}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{t('certifications.cert1.title')}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-sm text-muted-foreground mr-1">{t('certifications.issuedBy')}:</span>
                  <Link 
                    href={t('certifications.cert1.issuerLink')} 
                    className="text-sm text-muted-foreground hover:text-primary"
                    isExternal
                  >
                    {t('certifications.cert1.issuer')}
                  </Link>
                </div>
                <div className="flex flex-row items-center mb-4 gap-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <p className="text-sm text-muted-foreground">{t('certifications.cert1.date')}</p>
                </div>
                <Link 
                  href={t('certifications.cert1.credlyLink')}
                  isExternal
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  {t('certifications.cert1.verify')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold">{t('languages.title')}</h2>
          <p className="text-sm text-muted-foreground mt-2 mb-8 lg:mb-12 italic">
            {t('languages.proficiency.levels.a')}{' '}•{' '}
            {t('languages.proficiency.levels.b')}{' '}•{' '}
            {t('languages.proficiency.levels.c')}
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('languages.portuguese')} (🇵🇹)</h3>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full border-collapse border border-border rounded-lg overflow-hidden min-w-[320px]">
                  <thead>
                    <tr className="bg-muted">
                      <th colSpan={2} className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold border-b border-border text-xs md:text-sm">{t('languages.proficiency.comprehension')}</th>
                      <th colSpan={2} className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold border-b border-border text-xs md:text-sm">{t('languages.proficiency.communicate')}</th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold border-b border-border text-xs md:text-sm">{t('languages.proficiency.writing')}</th>
                    </tr>
                    <tr className="bg-muted/50">
                      <th className="px-2 md:px-4 py-1 md:py-2 text-xs font-medium border-b border-border">{t('languages.proficiency.oral')}</th>
                      <th className="px-2 md:px-4 py-1 md:py-2 text-xs font-medium border-b border-border">{t('languages.proficiency.reading')}</th>
                      <th className="px-2 md:px-4 py-1 md:py-2 text-xs font-medium border-b border-border">{t('languages.proficiency.oralProduction')}</th>
                      <th className="px-2 md:px-4 py-1 md:py-2 text-xs font-medium border-b border-border">{t('languages.proficiency.oralInteraction')}</th>
                      <th className="px-2 md:px-4 py-1 md:py-2 text-xs font-medium border-b border-border">{t('languages.proficiency.writing')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-card">
                      <td className="px-2 md:px-4 py-2 md:py-3 text-center font-bold border-b border-border text-xs md:text-sm">
                        {t('languages.proficiency.portuguese.oralComprehensionLevel')}
                      </td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-center font-bold border-b border-border text-xs md:text-sm">
                        {t('languages.proficiency.portuguese.readingLevel')}
                      </td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-center font-bold border-b border-border text-xs md:text-sm">
                        {t('languages.proficiency.portuguese.oralProductionLevel')}
                      </td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-center font-bold border-b border-border text-xs md:text-sm">
                        {t('languages.proficiency.portuguese.oralInteractionLevel')}
                      </td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-center font-bold border-b border-border text-xs md:text-sm">
                        {t('languages.proficiency.portuguese.writingLevel')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t('languages.english')} (🇬🇧)</h3>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full border-collapse border border-border rounded-lg overflow-hidden min-w-[320px]">
                  <thead>
                    <tr className="bg-muted">
                      <th colSpan={2} className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold border-b border-border text-xs md:text-sm">{t('languages.proficiency.comprehension')}</th>
                      <th colSpan={2} className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold border-b border-border text-xs md:text-sm">{t('languages.proficiency.communicate')}</th>
                      <th className="px-2 md:px-4 py-2 md:py-3 text-center font-semibold border-b border-border text-xs md:text-sm">{t('languages.proficiency.writing')}</th>
                    </tr>
                    <tr className="bg-muted/50">
                      <th className="px-2 md:px-4 py-1 md:py-2 text-xs font-medium border-b border-border">{t('languages.proficiency.oral')}</th>
                      <th className="px-2 md:px-4 py-1 md:py-2 text-xs font-medium border-b border-border">{t('languages.proficiency.reading')}</th>
                      <th className="px-2 md:px-4 py-1 md:py-2 text-xs font-medium border-b border-border">{t('languages.proficiency.oralProduction')}</th>
                      <th className="px-2 md:px-4 py-1 md:py-2 text-xs font-medium border-b border-border">{t('languages.proficiency.oralInteraction')}</th>
                      <th className="px-2 md:px-4 py-1 md:py-2 text-xs font-medium border-b border-border">{t('languages.proficiency.writing')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-card">
                      <td className="px-2 md:px-4 py-2 md:py-3 text-center font-bold border-b border-border text-xs md:text-sm">
                        {t('languages.proficiency.english.oralComprehensionLevel')}
                      </td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-center font-bold border-b border-border text-xs md:text-sm">
                        {t('languages.proficiency.english.readingLevel')}
                      </td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-center font-bold border-b border-border text-xs md:text-sm">
                        {t('languages.proficiency.english.oralProductionLevel')}
                      </td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-center font-bold border-b border-border text-xs md:text-sm">
                        {t('languages.proficiency.english.oralInteractionLevel')}
                      </td>
                      <td className="px-2 md:px-4 py-2 md:py-3 text-center font-bold border-b border-border text-xs md:text-sm">
                        {t('languages.proficiency.english.writingLevel')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 