"use client";

import { useState, useEffect, useRef } from "react";

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
        style={{ 
          fontSize: '3.75rem', 
          fontWeight: '700', 
          color: isHighlighted ? 'var(--primary)' : '#27272a',
          transition: 'color 0.3s ease-in-out'
        }}
      >
        {value}
      </h2>
      <p style={{ marginTop: '0.5rem', color: '#d4d4d8' }}>{label}</p>
    </div>
  );
}

export function StatsCounter() {
  const [currentHighlight, setCurrentHighlight] = useState(-1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const stats = [
    { value: "12", label: "Years Experience" },
    { value: "60+", label: "Clients" },
    { value: "08", label: "Team Members" },
    { value: "122+", label: "Completed Projects" }
  ];
  
  useEffect(() => {
    // Start the infinite loop
    startInfiniteLoop();
    
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  },);
  
  const startInfiniteLoop = () => {
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Initial animation
    runSequence();
    
    // Set up the interval to repeat the animation
    intervalRef.current = setInterval(() => {
      runSequence();
    }, stats.length * 1000 + 2000); // Wait a bit longer between full cycles
    
    // Function to run through the stats once
    function runSequence() {
      // Reset to no highlight
      setCurrentHighlight(-1);
      
      // Highlight each stat in sequence
      stats.forEach((_, index) => {
        setTimeout(() => {
          setCurrentHighlight(index);
        }, index * 1000); // 1 second between highlights
      });
      
      // Reset after the sequence completes
      setTimeout(() => {
        setCurrentHighlight(-1);
      }, stats.length * 1000);
    }
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