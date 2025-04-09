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
  const highlightColor = 'var(--primary)';
  const normalColor = '#808080';
  const labelNormalColor = '#808080';
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 
        className={`text-[2.5rem] md:text-[3.75rem] font-bold transition-colors duration-300`}
        style={{ 
          color: isHighlighted ? highlightColor : normalColor,
        }}
      >
        {value}
      </h2>
      <p 
        className={`mt-2 text-sm md:text-base transition-all duration-300`}
        style={{ 
          color: isHighlighted ? highlightColor : labelNormalColor,
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
    }, stats.length * 1500 + 2000); // Allow enough time for full sequence plus pause
    
    // Cleanup on unmount
    return () => {
      clearInterval(intervalId);
      // Clear any pending timeouts
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);
  
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
      }, 1500 * index + 500); // Spacing out enough for visibility
      
      timeoutsRef.current.push(timeout);
    });
    
    // Reset at the end of sequence
    const resetTimeout = setTimeout(() => {
      setCurrentHighlight(-1);
    }, stats.length * 1500 + 500);
    
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