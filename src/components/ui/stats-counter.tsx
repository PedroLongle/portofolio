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
  const normalColor = '#27272a';
  const labelNormalColor = '#d4d4d8';
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 
        style={{ 
          fontSize: '3.75rem', 
          fontWeight: '700', 
          color: isHighlighted ? highlightColor : normalColor,
          transition: 'color 0.3s ease-in-out'
        }}
      >
        {value}
      </h2>
      <p 
        style={{ 
          marginTop: '0.5rem', 
          color: isHighlighted ? highlightColor : labelNormalColor,
          fontWeight: isHighlighted ? 600 : 400,
          transition: 'all 0.3s ease-in-out'
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
    { value: "5+", label: t('clients') },
    { value: "20k+", label: t('hoursCoding') },
    { value: "5+", label: t('completedProjects') }
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
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '2rem'
      }}
    >
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