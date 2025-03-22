import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CursorTrail } from "@/components/ui/cursor-trail";
import { I18nProvider } from "@/i18n/provider";
import { defaultLocale } from "@/i18n/config";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Pedro Longle | Software Engineer",
  description: "Portfolio website for a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning className={montserrat.variable}>
      <body>
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Header />
            <main>
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
