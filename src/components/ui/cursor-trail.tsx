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

      // Check what element is under the cursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor) {
        // Identify if we're over a UI component or text
        const isOverComponent = isUIComponent(elementUnderCursor);
        
        if (!isOverComponent) {
          // Check if this is a dark background
          const isDark = isDarkBackground(elementUnderCursor);
          setIsOverDarkBg(isDark);
          
          // Only add trail points if over dark background & not over a component
          if (isDark) {
            setPoints(prevPoints => [
              { 
                x: e.clientX, 
                y: e.clientY, 
                opacity: 1
              },
              ...prevPoints.slice(0, 24), // Keep points for longer trail
            ]);
          }
        } else {
          // We're over a component, don't update dark background state
          // This prevents flickering when passing over components
          setIsOverDarkBg(false);
        }
      }
    };

    // Check if we're over a UI component
    const isUIComponent = (element: Element): boolean => {
      // Common UI component tags and classes
      const componentTags = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA', 'NAV', 'HEADER', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
      const componentClasses = ['card', 'btn', 'button', 'header', 'footer', 'nav', 'sidebar', 'menu'];
      
      // Check if the element itself is a component
      if (componentTags.includes(element.tagName)) {
        return true;
      }
      
      // Check classes of this element
      for (const className of componentClasses) {
        if (element.classList && element.classList.contains(className)) {
          return true;
        }
      }
      
      // Check if element has text content
      if (element.textContent && element.textContent.trim().length > 0) {
        // If it's a P, SPAN, DIV with text, consider it a UI component
        if (['P', 'SPAN', 'DIV', 'LI', 'TD', 'TH'].includes(element.tagName)) {
          return true;
        }
      }
      
      // Check for parent elements that might be UI components
      // Limited depth to avoid walking the entire DOM
      let parent = element.parentElement;
      let depth = 0;
      
      while (parent && depth < 3) {
        // Check if parent is a card or other container component
        if (parent.classList) {
          for (const className of componentClasses) {
            if (parent.classList.contains(className)) {
              return true;
            }
          }
        }
        
        // Check if parent tag is a component
        if (componentTags.includes(parent.tagName)) {
          return true;
        }
        
        parent = parent.parentElement;
        depth++;
      }
      
      return false;
    };
    
    // Check if element has a dark background
    const isDarkBackground = (element: Element): boolean => {
      // First check the element itself
      const computedStyle = window.getComputedStyle(element);
      const bgColor = computedStyle.backgroundColor;
      
      // Check for dark color in RGB format
      const isVeryDark = bgColor.includes('rgb') && 
        (() => {
          const rgbValues = bgColor.match(/\d+/g);
          if (rgbValues && rgbValues.length >= 3) {
            const [r, g, b] = rgbValues.map(Number);
            // Check for very dark colors - RGB values all below 30
            return r < 30 && g < 30 && b < 30;
          }
          return false;
        })();
      
      if (isVeryDark) return true;
      
      // If this element doesn't have a dark background, check parents
      // (limited depth to avoid walking the entire DOM)
      let parent = element.parentElement;
      let depth = 0;
      
      while (parent && depth < 3 && bgColor === 'rgba(0, 0, 0, 0)') {
        const parentStyle = window.getComputedStyle(parent);
        const parentBgColor = parentStyle.backgroundColor;
        
        // Check parent background color
        const isParentDark = parentBgColor.includes('rgb') && 
          (() => {
            const rgbValues = parentBgColor.match(/\d+/g);
            if (rgbValues && rgbValues.length >= 3) {
              const [r, g, b] = rgbValues.map(Number);
              return r < 30 && g < 30 && b < 30;
            }
            return false;
          })();
        
        if (isParentDark) return true;
        
        parent = parent.parentElement;
        depth++;
      }
      
      // Also check for any specific dark classes
      element = element as HTMLElement;
      let currentElement: Element | null = element;
      
      while (currentElement) {
        if (currentElement.classList && 
            (currentElement.classList.contains('bg-black') || 
             currentElement.classList.contains('dark') ||
             currentElement.classList.contains('dark-bg'))) {
          return true;
        }
        currentElement = currentElement.parentElement;
      }
      
      return false;
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

  if (points.length < 2 || !isOverDarkBg) return null;

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
    </div>
  );
} 