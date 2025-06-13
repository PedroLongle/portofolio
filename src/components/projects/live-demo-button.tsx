import Link from "next/link";
import { useTranslations } from "@/i18n/client";

interface LiveDemoButtonProps {
  demoUrl: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
}

export default function LiveDemoButton({ 
  demoUrl, 
  className = "",
  size = "md",
  variant = "primary"
}: LiveDemoButtonProps) {
  const t = useTranslations('common.buttons');
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg"
  };
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/25",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
  };
  
  return (
    <Link
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative inline-flex items-center justify-center gap-3
        font-semibold rounded-full transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-xl active:scale-95
        transform-gpu will-change-transform
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {/* Pulsing background effect for primary variant */}
      {variant === "primary" && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-20 animate-pulse"></div>
      )}
      
      {/* Play Icon */}
      <div className="relative flex items-center justify-center">
        {/* Play button background circle */}
        <div className={`
          relative flex items-center justify-center rounded-full
          ${size === "sm" ? "w-6 h-6" : size === "md" ? "w-7 h-7" : "w-8 h-8"}
          ${variant === "primary" 
            ? "bg-white/20 group-hover:bg-white/30 border border-white/30" 
            : "bg-primary/10 group-hover:bg-primary/20 border border-primary/20"
          }
          transition-all duration-300
        `}>
          {/* Play triangle */}
          <div className={`
            ${variant === "primary" ? "text-white" : "text-primary"}
            transition-transform duration-300 group-hover:scale-110
          `}>
            <svg 
              className={`${size === "sm" ? "w-3 h-3" : size === "md" ? "w-3.5 h-3.5" : "w-4 h-4"} ml-0.5`}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* LIVE Text with animated dot */}
      <div className="relative flex items-center gap-2">
        <span className="relative">
          {t('liveDemo')}
        </span>
        
        {/* Animated live indicator dot */}
        {variant === "primary" && (
          <div className="relative flex items-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping opacity-40"></div>
          </div>
        )}
      </div>
      
      {/* External link icon */}
      <svg 
        className={`
          ${size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : "w-5 h-5"}
          transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5
        `}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={2}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
        />
      </svg>
      
    </Link>
  );
} 