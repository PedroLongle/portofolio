"use client";

import { useTranslations } from "@/i18n/client";
import Link from "next/link";
import Image from "next/image";

export default function SupportPage() {
  const t = useTranslations("support");
  const commonT = useTranslations("common.buttons");
  
  return (
    <div className="section bg-muted pt-6">
      <div className="container">
        <div className="mx-auto mt-6 md:mt-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">{t("title")}</h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-16">
            {t("description")}
          </p>
          
          <div className="flex flex-col space-y-8 md:space-y-16">
            {/* Buy Me a Coffee */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-zinc-900">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:max-w-5xl p-6 md:p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">{t("buyMeCoffee.title")}</h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">
                      {t("buyMeCoffee.description")}
                      {t("buyMeCoffee.description")}
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://www.buymeacoffee.com/pedrolongle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-white rounded-2xl text-sm font-medium transition-colors"
                    >
                      <Image 
                        src="/bmc/button.svg"
                        alt="Hire me" 
                        width={100} 
                        height={50}
                        style={{ width: '40%', maxWidth: '180px', height: 'auto' }}
                        priority
                      />
                    </a>
                  </div>
                </div>
                <div className="relative flex items-center justify-center p-4 md:p-0">
                  <div className="flex items-center justify-center p-2 md:mr-10">
                    <Image 
                      src={"/bmc/qr.png"}
                      alt="Buy me a coffee" 
                      width={200} 
                      height={200}
                      style={{ width: '120px', height: 'auto', borderRadius: '10px' }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hire Me */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-zinc-900">
              <div className="flex flex-col-reverse md:flex-row">
                <div className="w-full md:w-1/3 bg-primary/10 relative flex items-center justify-center py-6 md:py-0">
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <Image 
                      src="/illustrations/hire.svg"
                      alt="Hire me" 
                      width={250} 
                      height={250}
                      style={{ width: '75%', maxWidth: '300px', height: 'auto' }}
                      priority
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-6 md:p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">{t("hireMe.title")}</h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-6">
                      {t("hireMe.description")}
                      {t("hireMe.description")}
                      {t("hireMe.description")}
                    </p>
                  </div>
                  <div className="">
                    <Link 
                      href="/contact" 
                      className="btn btn-primary inline-flex items-center rounded-xl w-full pl-4 md:pl-6 h-10 md:h-12 mt-6 text-sm md:text-base"
                    >
                      {commonT("getInTouch")}
                      <svg 
                        width="16" 
                        height="16"
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="ml-2"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </Link>
                    
                    <div className="relative flex items-center mt-8 md:mt-10 mb-4">
                      <div className="flex-grow border-t border-muted"></div>
                      <span className="flex-shrink mx-3 text-muted-foreground text-xs md:text-sm">OR</span>
                      <div className="flex-grow border-t border-muted"></div>
                    </div>
                    
                    <p className="text-xs md:text-sm text-muted-foreground mb-3">Check my profile at:</p>
                    
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                      <a 
                        href="https://www.fiverr.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#1DBF73] text-white rounded-md text-xs md:text-sm font-medium hover:bg-[#19a764] transition-colors w-full flex items-center justify-center"
                      >
                        <Image 
                          src="/logos/fiverr.svg"
                          alt="Hire me" 
                          width={70} 
                          height={30}
                          style={{ width: '20%', maxWidth: '80px', height: 'auto' }}
                          priority
                        />
                      </a>
                      <a 
                        href="https://www.upwork.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-200 text-white rounded-md text-xs md:text-sm font-medium hover:bg-gray-300 transition-colors w-full flex items-center justify-center"
                      >
                       <Image 
                          src="/logos/upwork.svg"
                          alt="Hire me" 
                          width={70} 
                          height={30}
                          style={{ width: '25%', maxWidth: '90px', height: 'auto' }}
                          priority
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other Ways to Support */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-zinc-900">
              <div className="flex flex-col-reverse md:flex-row">
                <div className="w-full md:w-2/3 p-6 md:p-12">
                  <h2 className="text-xl md:text-2xl font-bold mb-3">{t("otherWays.title")}</h2>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">
                    {t("otherWays.description")}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg 
                        className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs md:text-sm">{t("otherWays.social")}</span>
                    </li>
                    <li className="flex items-center">
                      <svg 
                        className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs md:text-sm">{t("otherWays.github")}</span>
                    </li>
                    <li className="flex items-center">
                      <svg 
                        className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs md:text-sm">{t("otherWays.feedback")}</span>
                    </li>
                    <li className="flex items-center">
                      <svg 
                        className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs md:text-sm">{t("otherWays.recommend")}</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 relative flex items-center justify-center py-6 md:py-0">
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center p-6 md:p-10">
                    <Image 
                      src="/illustrations/support.svg"
                      alt="Support" 
                      width={150} 
                      height={150}
                      style={{ width: '60%', maxWidth: '200px', height: 'auto' }}
                      priority
                    />
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