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
        <div className="mx-auto">
          <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
          <p className="text-muted-foreground mb-16 text-lg">
            {t("description")}
          </p>
          
          <div className="flex flex-col space-y-16">
            {/* Buy Me a Coffee */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-zinc-900">
              <div className="flex flex-row">
                <div className="max-w-5xl p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">{t("buyMeCoffee.title")}</h2>
                    <p className="text-muted-foreground mb-4">
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
                        style={{ width: '22%', height: 'auto' }}
                        priority
                      />
                    </a>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="w-30% flex items-center justify-center p-2 mr-10">
                    <Image 
                      src={"/bmc/qr.png"}
                      alt="Buy me a coffee" 
                      width={800} 
                      height={800}
                      style={{ width: '95%', height: 'auto', borderRadius: '10px' }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hire Me */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-zinc-900">
              <div className="flex flex-row">
                <div className="w-1/3 bg-primary/10 relative flex items-center justify-center">
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <Image 
                      src="/illustrations/hire.svg"
                      alt="Hire me" 
                      width={400} 
                      height={600}
                      style={{ width: '90%', height: 'auto' }}
                      priority
                    />
                  </div>
                </div>
                <div className="w-2/3 p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">{t("hireMe.title")}</h2>
                    <p className="text-muted-foreground mb-6">
                      {t("hireMe.description")}
                      {t("hireMe.description")}
                      {t("hireMe.description")}
                    </p>
                  </div>
                  <div className="">
                    <Link 
                      href="/contact" 
                      className="btn btn-primary inline-flex items-center rounded-xl w-full pl-6 h-12 mt-6"
                    >
                      {commonT("getInTouch")}
                      <svg 
                        width="20" 
                        height="20" 
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
                    
                    <div className="relative flex items-center mt-10 mb-4">
                      <div className="flex-grow border-t border-muted"></div>
                      <span className="flex-shrink mx-3 text-muted-foreground text-sm">OR</span>
                      <div className="flex-grow border-t border-muted"></div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">Check my profile at:</p>
                    
                    <div className="flex space-x-3">
                      <a 
                        href="https://www.fiverr.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#1DBF73] text-white rounded-md text-sm font-medium hover:bg-[#19a764] transition-colors w-full flex items-center justify-center"
                      >
                        <Image 
                          src="/logos/fiverr.svg"
                          alt="Hire me" 
                          width={100} 
                          height={50}
                          style={{ width: '16%', height: 'auto' }}
                          priority
                        />
                      </a>
                      <a 
                        href="https://www.upwork.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-200 text-white rounded-md text-sm font-medium hover:bg-gray-300 transition-colors w-full flex items-center justify-center"
                      >
                       <Image 
                          src="/logos/upwork.svg"
                          alt="Hire me" 
                          width={100} 
                          height={50}
                          style={{ width: '20%', height: 'auto' }}
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
              <div className="flex flex-row">
                <div className="w-2/3 p-12">
                  <h2 className="text-2xl font-bold mb-3">{t("otherWays.title")}</h2>
                  <p className="text-muted-foreground mb-6">
                    {t("otherWays.description")}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg 
                        className="w-5 h-5 mr-2 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{t("otherWays.social")}</span>
                    </li>
                    <li className="flex items-center">
                      <svg 
                        className="w-5 h-5 mr-2 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{t("otherWays.github")}</span>
                    </li>
                    <li className="flex items-center">
                      <svg 
                        className="w-5 h-5 mr-2 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{t("otherWays.feedback")}</span>
                    </li>
                    <li className="flex items-center">
                      <svg 
                        className="w-5 h-5 mr-2 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{t("otherWays.recommend")}</span>
                    </li>
                  </ul>
                </div>
                <div className="w-1/3 relative flex items-center justify-center">
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center p-10">
                    <Image 
                      src="/illustrations/support.svg"
                      alt="Support" 
                      width={200} 
                      height={400}
                      style={{ width: '60%', height: 'auto' }}
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