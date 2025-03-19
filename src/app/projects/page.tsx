import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Explore our portfolio of award-winning design projects spanning various industries and design disciplines.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Let's collaborate and create something extraordinary together. Our team is ready to transform your vision into reality.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 uppercase text-sm tracking-wider font-medium">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, category, image, link }: { 
  title: string;
  category: string;
  image: string;
  link: string;
}) {
  return (
    <div className="group relative overflow-hidden bg-zinc-900">
      <div className="relative h-[350px] w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link 
            href={link} 
            className="bg-red-600 text-white px-6 py-3 rounded-sm uppercase text-sm tracking-wider font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Project
          </Link>
        </div>
      </div>
      <div className="p-6">
        <span className="text-red-600 text-sm uppercase tracking-wider">{category}</span>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
      </div>
    </div>
  );
}

// Sample project data
const projects = [
  {
    title: "The Vintage",
    category: "Web Design",
    image: "https://placehold.co/600x350/333/FFF?text=Vintage",
    link: "/projects/vintage"
  },
  {
    title: "Foodasa",
    category: "Mobile App",
    image: "https://placehold.co/600x350/333/FFF?text=Foodasa",
    link: "/projects/foodasa"
  },
  {
    title: "Marco Accent",
    category: "E-commerce",
    image: "https://placehold.co/600x350/333/FFF?text=Marco+Accent",
    link: "/projects/marco-accent"
  },
  {
    title: "Mozaik",
    category: "Branding",
    image: "https://placehold.co/600x350/333/FFF?text=Mozaik",
    link: "/projects/mozaik"
  },
  {
    title: "Urban Beats",
    category: "UI Design",
    image: "https://placehold.co/600x350/333/FFF?text=Urban+Beats",
    link: "/projects/urban-beats"
  },
  {
    title: "Nature Explorer",
    category: "Photography",
    image: "https://placehold.co/600x350/333/FFF?text=Nature+Explorer",
    link: "/projects/nature-explorer"
  },
  {
    title: "Tech Haven",
    category: "Web App",
    image: "https://placehold.co/600x350/333/FFF?text=Tech+Haven",
    link: "/projects/tech-haven"
  },
  {
    title: "Luxe Interior",
    category: "Interior Design",
    image: "https://placehold.co/600x350/333/FFF?text=Luxe+Interior",
    link: "/projects/luxe-interior"
  },
  {
    title: "Modern Architecture",
    category: "Architecture",
    image: "https://placehold.co/600x350/333/FFF?text=Modern+Architecture",
    link: "/projects/modern-architecture"
  },
]; 