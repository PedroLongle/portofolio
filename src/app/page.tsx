import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem', fontWeight: '500' }}>
              Hello, I'm Pedro Longle
            </h2>
            <h1 style={{ fontSize: '3.75rem', fontWeight: '700' }}>Software Engineer</h1>
            <p style={{ color: 'var(--muted-foreground)', maxWidth: '32rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, et dolore magna aliqua. Ut enim veniam.
            </p>
            <button className="btn btn-primary">
              About Me
            </button>
          </div>
          <div className="lg:w-1/2">
            <Image 
              src="/images/home.svg"
              alt="Software Engineer" 
              width={600} 
              height={800}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <ServiceCard 
              title="UI Design" 
              icon={
                <svg style={{ width: '2rem', height: '2rem', color: 'var(--primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              }
              description="Lorem Ipsum is simply text of the printing type of the printing here."
              isHighlighted={false}
            />
            <ServiceCard 
              title="Product Design" 
              icon={
                <svg style={{ width: '2rem', height: '2rem', color: 'white' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              }
              description="Lorem Ipsum is simply text of the printing type of the printing here."
              isHighlighted={true}
            />
            <ServiceCard 
              title="Branding" 
              icon={
                <svg style={{ width: '2rem', height: '2rem', color: 'var(--primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              }
              description="Lorem Ipsum is simply text of the printing type of the printing here."
              isHighlighted={false}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '3.75rem', fontWeight: '700', color: 'var(--primary)' }}>12</h2>
              <p style={{ marginTop: '0.5rem', color: '#d4d4d8' }}>Years Experience</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '3.75rem', fontWeight: '700', color: '#27272a' }}>60+</h2>
              <p style={{ marginTop: '0.5rem', color: '#d4d4d8' }}>Clients</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '3.75rem', fontWeight: '700', color: '#27272a' }}>08</h2>
              <p style={{ marginTop: '0.5rem', color: '#d4d4d8' }}>Years Experience</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '3.75rem', fontWeight: '700', color: '#27272a' }}>122+</h2>
              <p style={{ marginTop: '0.5rem', color: '#d4d4d8' }}>Completed Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '700' }}>FEATURED PROJECTS</h2>
              <p style={{ color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
            <button className="btn btn-primary">
              View All
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <ProjectCard 
              title="The Vintage" 
              image="https://placehold.co/600x350/333/FFF?text=Vintage" 
              link="/projects/vintage"
            />
            <ProjectCard 
              title="Foodasa" 
              image="https://placehold.co/600x350/333/FFF?text=Foodasa" 
              link="/projects/foodasa" 
            />
            <ProjectCard 
              title="Marco Accent" 
              image="https://placehold.co/600x350/333/FFF?text=Marco+Accent" 
              link="/projects/marco-accent" 
            />
            <ProjectCard 
              title="Mozaik" 
              image="https://placehold.co/600x350/333/FFF?text=Mozaik" 
              link="/projects/mozaik" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '700' }}>Let's work together on your next project</h2>
            <Link href="/contact" className="btn btn-primary">
              Contact
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
      <div style={{ marginBottom: '1rem' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: isHighlighted ? '#f8fafc' : 'var(--muted-foreground)', marginBottom: '1rem' }}>{description}</p>
      <Link href="#" style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase' }}>
        KNOW MORE 
        <svg style={{ width: '1rem', height: '1rem', marginLeft: '0.25rem' }} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
}
