
import React from 'react';

interface LogoProps {
  scale?: number;
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ scale = 1, className = "", light = false }) => {
  const darkColor = light ? '#ffffff' : '#000080';
  const lightColor = '#0088ff';

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      <svg 
        viewBox="0 0 500 320" 
        xmlns="http://www.w3.org/2000/svg" 
        style={{ height: `${8 * scale}rem`, width: 'auto' }}
        aria-label="ComplyAnto Logo"
      >
        <defs>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Merriweather:wght@700&display=swap');
              .logo-text { font-family: 'Playfair Display', serif; font-weight: 900; }
              .sub-text { font-family: 'Merriweather', serif; font-weight: 700; }
            `}
          </style>
        </defs>
        
        {/* Left Shape */}
        <path d="M 140 60 A 85 85 0 0 0 140 230 L 140 60" fill="none" stroke={darkColor} strokeWidth="3" />
        
        {/* Right Shape */}
        <path d="M 360 90 A 85 85 0 0 1 360 260 L 360 90" fill="none" stroke={darkColor} strokeWidth="3" />

        {/* Top Bar */}
        <rect x="55" y="110" width="390" height="14" fill={lightColor} />
        <text x="250" y="121" fill="#ffffff" fontSize="11" className="sub-text" textAnchor="middle" letterSpacing="0.05em">AML Consulting</text>

        {/* Bottom Bar */}
        <rect x="55" y="195" width="390" height="14" fill={lightColor} />
        <text x="250" y="206" fill="#ffffff" fontSize="11" className="sub-text" textAnchor="middle" letterSpacing="0.05em">AML Consulting</text>

        {/* Main Text */}
        <text x="250" y="180" fill={darkColor} fontSize="64" className="logo-text" textAnchor="middle" letterSpacing="0.02em">ComplyAnto</text>
      </svg>
    </div>
  );
};

export default Logo;
