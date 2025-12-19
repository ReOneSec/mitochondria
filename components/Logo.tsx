import React from 'react';

interface LogoProps {
  className?: string;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", height = 40 }) => {
  // This SVG mimics the shape and colors of the user's provided logo
  // (Green 3D text inside a cyan membrane oval)
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <svg 
        height={height} 
        viewBox="0 0 300 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Outer Membrane (Cyan/Teal) */}
        <ellipse cx="150" cy="50" rx="140" ry="45" fill="#ECFEFF" stroke="#06B6D4" strokeWidth="3" />
        <ellipse cx="150" cy="50" rx="130" ry="38" fill="#CCFBF1" stroke="#2DD4BF" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Inner Texture (Mitochondria folds hint) */}
        <path d="M50 50 C 70 30, 90 70, 110 50 S 150 70, 170 50 S 210 30, 230 50" stroke="#99F6E4" strokeWidth="4" strokeLinecap="round" opacity="0.5" />

        {/* Text "MITOCHONDRIA" - Mimicking the green 3D text */}
        <text 
          x="150" 
          y="65" 
          textAnchor="middle" 
          fontFamily="Impact, sans-serif" 
          fontSize="42" 
          fontWeight="bold" 
          fill="#10B981"
          stroke="#064E3B"
          strokeWidth="1"
          style={{ letterSpacing: '0.05em', filter: 'drop-shadow(2px 2px 0px #065F46)' }}
        >
          MITOCHONDRIA
        </text>
        
        {/* Shine effect */}
        <ellipse cx="100" cy="30" rx="40" ry="10" fill="white" opacity="0.4" transform="rotate(-10 100 30)" />
      </svg>
    </div>
  );
};