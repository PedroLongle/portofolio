import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/footer";
import { CursorTrail } from "@/components/layout/cursor-trail";
import { I18nProvider } from "@/i18n/provider";
import { defaultLocale } from "@/i18n/config";
import Header from "@/components/layout/header";
import { GoogleAnalytics } from '@next/third-parties/google';
import { TooltipProvider } from "@/components/shadcn/tooltip";
import localFont from 'next/font/local'

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
});

const rumbleBrave = localFont({
  src: '../../public/fonts/RumbleBrave.otf',
  display: 'swap',
  variable: "--font-rumble-brave",
})

export const metadata: Metadata = {
  title: "Pedro Longle | Software Engineer",
  description: "Personal portofolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning className={`${montserrat.variable} ${rumbleBrave.variable}`}> 
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <TooltipProvider>
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG || ''} /> 
          <I18nProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              disableTransitionOnChange
            >
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <CursorTrail />
            </ThemeProvider>
          </I18nProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
