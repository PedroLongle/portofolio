"use client";

import { useState, useEffect } from "react";

export default function ProgressDemo() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Reset progress
    setProgress(0);
    
    // Create timer for exact 3-second duration
    const duration = 3000; // 3 seconds in milliseconds
    const interval = 30; // Update every 30ms for smooth animation
    const steps = duration / interval;
    const increment = 100 / steps;
    
    // Set up interval for progress updates
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, interval);
    
    // Clear interval after 3 seconds
    const timer = setTimeout(() => {
      clearInterval(progressInterval);
    }, duration);
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 mt-6 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-primary to-blue-500 shadow-lg transition-all ease-linear rounded-full"
        style={{ 
          width: `${progress}%`,
          transition: "width 50ms linear"
        }}
      ></div>
    </div>
  );
} 