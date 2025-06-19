"use client";

import { useTranslations } from "@/i18n/client";
import Link from "next/link";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/shadcn/tooltip";

export default function SupportPage() {
  const t = useTranslations("common");
  const supportT = useTranslations("support");
  const commonT = useTranslations("common.buttons");
  
  return (
    <div className="section bg-muted pt-6">
      <div className="container">
        <div className="mx-auto mt-6 md:mt-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">{supportT("title")}</h1>
          <p className="text-sm md:text-lg text-muted-foreground mb-8 md:mb-16">
            {supportT("description")}
          </p>
          
          <div className="flex flex-col space-y-8 md:space-y-16">
            {/* Buy Me a Coffee */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-zinc-900">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full md:max-w-5xl p-6 md:p-10 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">{supportT("buyMeCoffee.title")}</h2>
                    <p className="text-xs md:text-base text-muted-foreground mb-4">
                      {supportT("buyMeCoffee.description")}
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://www.buymeacoffee.com/pedrolongle" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-white rounded-2xl text-sm font-medium transition-colors w-full mt-2"
                    >
                      <Image 
                        src="/bmc/button.svg"
                        alt="Hire me" 
                        width={100} 
                        height={50}
                        style={{ width: '80%', maxWidth: '180px', height: 'auto' }}
                        priority
                      />
                    </a>
                  </div>
                </div>
                <div className="hidden lg:flex relative items-center justify-center p-4 md:p-0">
                  <div className="flex items-center justify-center p-2 md:-mr-16">
                    <Image 
                      src="/bmc/qr.png"
                      alt="Buy me a coffee" 
                      width={100} 
                      height={100}
                      style={{ width: '50%', height: 'auto', borderRadius: '10px' }}
                      priority
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hire Me */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-zinc-900">
              <div className="flex flex-col-reverse md:flex-row">
                <div className="w-full xl:w-1/3 relative hidden xl:flex items-center justify-center py-6 md:py-0">
                  <div className="flex items-center justify-center w-full h-full p-6 md:p-10">
                    <Image 
                      src="/illustrations/hire.svg"
                      alt="Hire me" 
                      width={250} 
                      height={250}
                      style={{ width: '100%', height: 'auto' }}
                      priority
                    />
                  </div>
                </div>
                <div className="w-full xl:w-2/3 p-6 md:p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3">{supportT("hireMe.title")}</h2>
                    <p className="text-xs md:text-base text-muted-foreground mb-6">
                      {supportT("hireMe.description")}
                    </p>
                  </div>
                  <div className="">
                    <Link 
                      href="/contact" 
                      className="btn btn-primary rounded-lg text-xs md:text-sm lg:text-md w-full"
                      >
                      {commonT("getInTouch")}
                    </Link>
                    
                    <div className="relative flex items-center mt-8 md:mt-10 mb-4">
                      <div className="flex-grow border-t border-muted"></div>
                      <span className="flex-shrink mx-3 text-muted-foreground text-xs md:text-sm">{t("or")}</span>
                      <div className="flex-grow border-t border-muted"></div>
                    </div>
                    
                    <p className="text-xs md:text-sm text-muted-foreground mb-3">{supportT("hireMe.checkMyProfile")}</p>
                    
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a 
                            //href="https://www.fiverr.com/" 
                            //target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-[#1DBF73] text-white rounded-md text-xs md:text-sm font-medium transition-colors w-full flex items-center justify-center cursor-not-allowed opacity-60"
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
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-700">
                            <p>{supportT("hireMe.underConstruction")}</p>
                          </TooltipContent>
                        </Tooltip>
                          <a 
                            href="https://www.upwork.com/freelancers/~01fe11aa16297799dc?mp_source=share "
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gray-200 text-white rounded-md text-xs md:text-sm font-medium transition-colors w-full flex items-center justify-center"
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
                <div className="w-full lg:w-2/3 p-6 md:p-12">
                  <h2 className="text-xl md:text-2xl font-bold mb-3">{supportT("otherWays.title")}</h2>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">
                    {supportT("otherWays.description")}
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
                      <span className="text-xs md:text-sm">{supportT("otherWays.social")}</span>
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
                      <span className="text-xs md:text-sm">{supportT("otherWays.github")}</span>
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
                      <span className="text-xs md:text-sm">{supportT("otherWays.feedback")}</span>
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
                      <span className="text-xs md:text-sm">{supportT("otherWays.recommend")}</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 relative hidden lg:flex items-center justify-center py-6 md:py-0">
                  <div className="w-full h-full items-center justify-center p-6 md:p-10">
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