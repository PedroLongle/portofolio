import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/footer";
import { CursorTrail } from "@/components/layout/cursor-trail";
import { I18nProvider } from "@/i18n/provider";
import { defaultLocale } from "@/i18n/config";
import Header from "@/components/layout/header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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
    <html lang={defaultLocale} suppressHydrationWarning className={montserrat.variable}>
      <body className="flex flex-col min-h-screen overflow-x-hidden">
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
      </body>
    </html>
  );
}
