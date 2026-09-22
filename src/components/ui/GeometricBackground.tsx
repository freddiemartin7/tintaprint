import React from 'react';

interface GeometricBackgroundProps {
  variant?: 'grid' | 'sparse' | 'dense';
  opacity?: number;
}

export default function GeometricBackground({
  variant = 'grid',
  opacity = 1,
}: GeometricBackgroundProps) {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
      opacity,
    }}>
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', inset: 0 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={`grid-${variant}`} width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
          </pattern>
        </defs>

        {/* Base grid */}
        <rect width="100%" height="100%" fill={`url(#grid-${variant})`} />

        {/* Floating accent rectangles */}
        <rect x="6%" y="12%" width="140" height="55" fill="none" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.15" rx="2"/>
        <rect x="70%" y="8%" width="90" height="38" fill="none" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.12" rx="2"/>
        <rect x="42%" y="68%" width="160" height="62" fill="none" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.10" rx="2"/>
        <rect x="82%" y="52%" width="100" height="42" fill="none" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.13" rx="2"/>
        <rect x="12%" y="72%" width="75" height="32" fill="none" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.10" rx="2"/>
        <rect x="58%" y="28%" width="120" height="48" fill="none" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.08" rx="2"/>

        {/* Crosshair marks */}
        <line x1="calc(25% - 8px)" y1="33%" x2="calc(25% + 8px)" y2="33%" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8"/>
        <line x1="25%" y1="calc(33% - 8px)" x2="25%" y2="calc(33% + 8px)" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8"/>
        <line x1="calc(75% - 8px)" y1="70%" x2="calc(75% + 8px)" y2="70%" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8"/>
        <line x1="75%" y1="calc(70% - 8px)" x2="75%" y2="calc(70% + 8px)" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8"/>
        <line x1="calc(50% - 8px)" y1="18%" x2="calc(50% + 8px)" y2="18%" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
        <line x1="50%" y1="calc(18% - 8px)" x2="50%" y2="calc(18% + 8px)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>

        {/* Corner bracket marks — top left */}
        <path d="M 32 32 L 32 58 M 32 32 L 58 32" fill="none" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.2"/>
        {/* Corner bracket marks — top right */}
        <path d="M calc(100% - 32px) 32 L calc(100% - 58px) 32 M calc(100% - 32px) 32 L calc(100% - 32px) 58" fill="none" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.2"/>
        {/* Corner bracket marks — bottom left */}
        <path d="M 32 calc(100% - 32px) L 32 calc(100% - 58px) M 32 calc(100% - 32px) L 58 calc(100% - 32px)" fill="none" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.2"/>
        {/* Corner bracket marks — bottom right */}
        <path d="M calc(100% - 32px) calc(100% - 32px) L calc(100% - 58px) calc(100% - 32px) M calc(100% - 32px) calc(100% - 32px) L calc(100% - 32px) calc(100% - 58px)" fill="none" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.2"/>

        {/* Diagonal accent lines */}
        <line x1="0" y1="100%" x2="30%" y2="60%" stroke="rgba(255,255,255,0.02)" strokeWidth="1"/>
        <line x1="100%" y1="0" x2="70%" y2="40%" stroke="rgba(255,255,255,0.02)" strokeWidth="1"/>
      </svg>

      {/* Dark overlay — keeps text readable */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.65)',
      }} />
    </div>
  );
}
