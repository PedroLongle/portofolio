"use client";

import { useEffect, useState } from "react";

interface Point {
  x: number;
  y: number;
  opacity: number;
}

export function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);
  const [isOverDarkBg, setIsOverDarkBg] = useState(false);
  const [, setIsMouseMoving] = useState(false);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;
    
    // Create trail points on mouse move
    const handleMouseMove = (e: MouseEvent) => {     
    
      // Set mouse as moving
      setIsMouseMoving(true);
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMouseMoving(false), 100);

      // Check if currently over a true black background
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor) {
        // Check background color directly
        const computedStyle = window.getComputedStyle(elementUnderCursor);
        const bgColor = computedStyle.backgroundColor;
        
        // Direct RGB check for true black (or very dark) backgrounds - RGB values close to 0
        const isVeryDark = bgColor.includes('rgb') && 
          (() => {
            const rgbValues = bgColor.match(/\d+/g);
            if (rgbValues && rgbValues.length >= 3) {
              const [r, g, b] = rgbValues.map(Number);
              // True black or very close to black (RGB values all below 20)
              return r < 20 && g < 20 && b < 20;
            }
            return false;
          })();
        
        // Also check for specific classes if direct color check isn't enough
        let currentElement: Element | null = elementUnderCursor;
        let hasSpecificClass = false;
        
        while (currentElement && !hasSpecificClass) {
          if (currentElement.classList && 
              currentElement.classList.contains('card-red')) {
            hasSpecificClass = true;
          }
          currentElement = currentElement.parentElement;
        }
        
        setIsOverDarkBg(isVeryDark || hasSpecificClass);
      }

      // Add a new point to the trail
      setPoints(prevPoints => [
        { 
          x: e.clientX, 
          y: e.clientY, 
          opacity: 1
        },
        ...prevPoints.slice(0, 24), // Keep more points for a longer comet tail
      ]);
    };

    // Reduce opacity of trail points over time
    const fadeInterval = setInterval(() => {
      setPoints(prevPoints => 
        prevPoints.map(point => ({
          ...point,
          opacity: point.opacity > 0 ? point.opacity - 0.015 : 0, // Slower fade for longer trail
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

  if (points.length < 2) return null;

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
      {isOverDarkBg && (
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
                      ? 'rgba(255, 100, 100, 1)' 
                      : `rgba(255, 0, 0, ${point.opacity * gradientFactor})`,
                    opacity: point.opacity,
                    transform: `translate(0, -50%) rotate(${angle}rad)`,
                    transformOrigin: 'left center',
                    boxShadow: index < 3 
                      ? `0 0 ${3 - index}px rgba(255, 30, 30, ${0.5 * gradientFactor})` 
                      : 'none', // Minimal glow effect
                    borderRadius: '0px',
                    zIndex: 9999 - index // Keep initial segments on top
                  }}
                />
              );
            })
          }
        </>
      )}
    </div>
  );
} 