import BuyMeCoffeeButton from "@/components/BuyMeCoffeeButton";
import Link from "next/link";

export const metadata = {
  title: "Support My Work | Pedro Longle",
  description: "Support my work and help me create more open-source projects and content.",
};

export default function SupportPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support My Work</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            If you find my work helpful or valuable, consider supporting me to help me
            continue creating open-source projects and content.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-md overflow-hidden mb-10">
          <div className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <svg className="w-16 h-16 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm-10-8h12v2H6V6z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-card-foreground">Buy Me a Coffee</h2>
              <p className="text-muted-foreground mb-6">
                Buy Me a Coffee is a simple and fun way to support my work with a small donation,
                the price of a coffee. Every coffee helps me dedicate more time to creating quality content and projects.
              </p>
              <div className="mb-6">
                <BuyMeCoffeeButton 
                  username="pedrolongle" 
                  text="Buy me a coffee" 
                  size="large" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary rounded-xl shadow-md overflow-hidden mb-10">
          <div className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-white">Hire Me for Projects</h2>
              <p className="text-white text-opacity-90 mb-6">
                Another great way to support my work is by hiring me for your web development 
                projects or consultations. I specialize in modern web technologies and can help 
                bring your ideas to life.
              </p>
              <div>
                <Link href="/contact" className="btn bg-white text-primary hover:bg-zinc-100 font-medium py-2 px-6 inline-block">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <svg className="w-16 h-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-card-foreground">Other Ways to Support</h2>
              <p className="text-muted-foreground mb-6">
                Your support doesn&apos;t have to be monetary. You can also help by:
              </p>
              <ul className="text-left space-y-2 mb-6 text-card-foreground">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Following me on social media and sharing my content</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Star and contribute to my GitHub repositories</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Providing feedback and suggestions for improvement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recommending me to your network for freelance opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 