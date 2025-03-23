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
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', height: '350px', width: '100%', overflow: 'hidden' }}>
        <Image 
          src={image} 
          alt={title}
          fill
          style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
          className="cursor-pointer"
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onClick={() => router.push(link)}
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{title}</h3>
        {description && (
          <p style={{ color: 'var(--muted-foreground)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            {description}
          </p>
        )}
        <Link href={link} style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)', fontSize: '0.875rem' }}>
          KNOW MORE 
          <svg style={{ width: '1rem', height: '1rem', marginLeft: '0.25rem' }} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 