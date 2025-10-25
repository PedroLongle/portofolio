"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "@/i18n/client";

interface StatItemProps {
  value: string;
  label: string;
  index: number;
  currentHighlight: number;
}

function StatItem({ value, label, index, currentHighlight }: StatItemProps) {
  const isHighlighted = index === currentHighlight;
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 
        className={`text-[2.5rem] md:text-[3.75rem] font-bold transition-all duration-500 ease-in-out`}
        style={{ 
          color: isHighlighted ? 'var(--primary)' : '#808080',
          transform: isHighlighted ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        {value}
      </h2>
      <p 
        className={`mt-2 text-sm md:text-base transition-all duration-500 ease-in-out`}
        style={{ 
          color: isHighlighted ? 'var(--primary)' : '#808080',
          fontWeight: isHighlighted ? 600 : 400,
        }}
      >
        {label}
      </p>
    </div>
  );
}

export function StatsCounter() {
  const [currentHighlight, setCurrentHighlight] = useState(-1);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const t = useTranslations('home.stats');
  
  const stats = [
    { value: "2.5", label: t('yearsExperience') },
    { value: "5", label: t('clients') },
    { value: "5k+", label: t('hoursCoding') },
    { value: "6", label: t('completedProjects') }
  ];
  
  useEffect(() => {
    // Start the sequence immediately
    startSequence();
    
    // Set up a repeating timer to restart the sequence
    const intervalId = setInterval(() => {
      startSequence();
    }, (stats.length * 2000) + 3000); // 2 seconds per stat + 3 second pause
    
    // Cleanup on unmount
    return () => {
      clearInterval(intervalId);
      // Clear any pending timeouts
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [stats.length]);
  
  const startSequence = () => {
    // Clear any existing timeouts
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    
    // Start with no highlight
    setCurrentHighlight(-1);
    
    // Highlight each stat in sequence
    stats.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setCurrentHighlight(index);
      }, 2000 * index + 1000); // 1 second delay + 2 seconds per stat
      
      timeoutsRef.current.push(timeout);
    });
    
    // Reset at the end of sequence
    const resetTimeout = setTimeout(() => {
      setCurrentHighlight(-1);
    }, (stats.length * 2000) + 1000);
    
    timeoutsRef.current.push(resetTimeout);
  };
  
  return (
    <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          value={stat.value}
          label={stat.label}
          index={index}
          currentHighlight={currentHighlight}
        />
      ))}
    </div>
  );
} 