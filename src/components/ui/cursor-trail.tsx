"use client";

import { useEffect, useState } from "react";

interface Point {
  x: number;
  y: number;
  opacity: number;
}

export function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;
    
    // Create trail points on mouse move
    const handleMouseMove = (e: MouseEvent) => {     
      // Set mouse as moving
      setIsMouseMoving(true);
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMouseMoving(false), 100);

      // Add trail points regardless of what's underneath
      setPoints(prevPoints => [
        { 
          x: e.clientX, 
          y: e.clientY, 
          opacity: 1
        },
        ...prevPoints.slice(0, 24), // Keep points for longer trail
      ]);
    };

    // Reduce opacity of trail points over time
    const fadeInterval = setInterval(() => {
      setPoints(prevPoints => 
        prevPoints.map(point => ({
          ...point,
          opacity: point.opacity > 0 ? point.opacity - 0.015 : 0, // Slower fade
        })).filter(point => point.opacity > 0)
      );
    }, 16); // Faster update for smoother trail

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(fadeInterval);
      clearTimeout(moveTimeout);
    };
  }, []);

  if (points.length < 2 || !isMouseMoving) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      pointerEvents: 'none', 
      zIndex: 9999, 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      overflow: 'hidden'
    }}>
      <>
        {/* Comet head (brighter, small dot) */}
        {points.length > 0 && (
          <div
            style={{
              position: 'absolute',
              left: points[0].x,
              top: points[0].y,
              width: '8px',
              height: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '50%',
              boxShadow: '0 0 10px 3px rgba(255, 50, 50, 0.9), 0 0 15px 5px rgba(255, 0, 0, 0.5)',
              transform: 'translate(-50%, -50%)',
              zIndex: 10000
            }}
          />
        )}
        
        {/* Comet tail (thin lines with gradient opacity) */}
        {points.length >= 2 && 
          points.slice(0, -1).map((point, index) => {
            const nextPoint = points[index + 1];
            
            // Calculate angle between points
            const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x);
            
            // Calculate distance between points
            const distance = Math.sqrt(
              Math.pow(nextPoint.x - point.x, 2) + 
              Math.pow(nextPoint.y - point.y, 2)
            );

            // Gradient factor based on position in trail
            const gradientFactor = 1 - (index / points.length);
            
            return (
              <div 
                key={index}
                style={{
                  position: 'absolute',
                  left: point.x,
                  top: point.y,
                  width: `${distance}px`,
                  height: `${Math.max(1.2, 3 * gradientFactor)}px`, // Thicker line
                  background: index === 0 
                    ? `linear-gradient(to right, rgba(255, 100, 100, ${point.opacity}), rgba(255, 50, 50, ${nextPoint.opacity * 0.8}))` 
                    : `linear-gradient(to right, rgba(255, 50, 50, ${point.opacity * gradientFactor}), rgba(255, 0, 0, ${nextPoint.opacity * 0.5 * gradientFactor}))`,
                  borderRadius: '4px',
                  transformOrigin: '0 50%',
                  transform: `rotate(${angle}rad)`,
                  zIndex: 9999 - index // Stack newer segments on top
                }}
              />
            );
          })
        }
      </>
    </div>
  );
} 