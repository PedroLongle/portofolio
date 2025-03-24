"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function ProjectCard({ title, description, image, link }: { 
  title: string; 
  description?: string;
  image: string; 
  link: string;
}) {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden">
      <div className="relative h-[350px] w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 cursor-pointer"
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onClick={() => router.push(link)}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">{title}</h3>
        {description && (
          <p className="text-muted-foreground mt-1 mb-3">
            {description}
          </p>
        )}
        <Link href={link} className="flex items-center text-primary text-sm uppercase">
          KNOW MORE 
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 