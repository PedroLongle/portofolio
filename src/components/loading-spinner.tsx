import React from "react";

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center space-y-6">
        {/* Main spinner container */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div 
            className="w-20 h-20 rounded-full animate-spin border-4"
            style={{
              borderColor: '#27272a',
              borderTopColor: '#dc2626',
              borderRightColor: '#dc262699'
            }}
          ></div>
          
          {/* Middle ring with opposite rotation */}
          <div 
            className="absolute inset-2 w-16 h-16 rounded-full animate-spin border-2"
            style={{
              borderColor: '#dc262633',
              borderBottomColor: '#dc2626',
              animationDirection: 'reverse',
              animationDuration: '1.5s'
            }}
          ></div>
          
          {/* Inner pulsing core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-4 h-4 rounded-full animate-pulse"
              style={{ backgroundColor: '#dc2626' }}
            ></div>
            <div 
              className="absolute w-4 h-4 rounded-full animate-ping"
              style={{ backgroundColor: '#dc262666' }}
            ></div>
          </div>
          
          {/* Orbiting dots */}
          <div 
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: '3s' }}
          >
            <div 
              className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
              style={{ backgroundColor: '#dc2626' }}
            ></div>
          </div>
          <div 
            className="absolute inset-0 animate-spin"
            style={{ 
              animationDuration: '3s', 
              animationDelay: '1s' 
            }}
          >
            <div 
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
              style={{ backgroundColor: '#dc262699' }}
            ></div>
          </div>
        </div>
        
        {/* Loading text with animated dots */}
        <div className="flex items-center space-x-2" style={{ color: '#a1a1aa' }}>
          <span className="text-base font-medium tracking-wide">Loading</span>
          <div className="flex space-x-1 mt-2">
            <div 
              className="w-1.5 h-1.5 rounded-full animate-bounce"
              style={{ 
                backgroundColor: '#dc2626',
                animationDelay: '0ms',
                animationDuration: '1s'
              }}
            ></div>
            <div 
              className="w-1.5 h-1.5 rounded-full animate-bounce"
              style={{ 
                backgroundColor: '#dc2626',
                animationDelay: '150ms',
                animationDuration: '1s'
              }}
            ></div>
            <div 
              className="w-1.5 h-1.5 rounded-full animate-bounce"
              style={{ 
                backgroundColor: '#dc2626',
                animationDelay: '300ms',
                animationDuration: '1s'
              }}
            ></div>
          </div>
        </div>
        
        {/* Subtle progress indication */}
        <div className="w-32 h-1 rounded-full overflow-hidden" style={{ backgroundColor: '#27272a66' }}>
          <div 
            className="h-full rounded-full animate-pulse"
            style={{
              width: '60%',
              background: 'linear-gradient(to right, #dc262699, #dc2626)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
} 