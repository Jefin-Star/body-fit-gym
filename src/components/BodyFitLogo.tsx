import React from 'react';

interface BodyFitLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'white' | 'gold' | 'monochrome';
  showText?: boolean;
}

export const BodyFitLogo: React.FC<BodyFitLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'white',
  showText = true,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-36 h-36',
  };

  const primaryColor = variant === 'gold' ? '#f59e0b' : '#ffffff';
  const accentColor = variant === 'gold' ? '#fbbf24' : '#ffffff';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 320 320"
        className={`${sizeMap[size]} transition-transform duration-300 hover:scale-105 filter drop-shadow-md`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Body Fit Gym Official Shield Logo"
      >
        {/* Shield Frame Outline */}
        <path
          d="M 40 45 L 85 45 M 235 45 L 280 45 L 255 170 L 160 295 L 65 170 L 40 45"
          stroke={primaryColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner Shield Accent line */}
        <path
          d="M 75 165 L 160 275 L 245 165"
          stroke={accentColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Muscular Silhouette Bodybuilder Flexing Arm */}
        <g fill={primaryColor}>
          {/* Head & Neck Profile */}
          <path d="M 148 48 C 144 42 153 30 162 30 C 172 30 178 38 178 48 C 178 54 172 60 164 62 C 167 68 174 74 182 78 C 175 80 166 77 160 74 C 156 72 150 67 146 62 C 144 58 143 53 148 48 Z" />
          
          {/* Profile Jawline / Face */}
          <path d="M 152 46 C 146 47 143 49 141 52 C 144 54 148 55 150 56 C 149 58 145 61 143 62 C 146 63 151 63 154 61 Z" />

          {/* Torso, Chest & Abs */}
          <path d="M 125 105 C 130 92 142 85 158 84 C 175 83 194 92 205 108 C 218 126 238 142 245 160 C 235 160 215 158 200 152 C 195 150 185 142 178 135 C 174 142 166 148 155 148 C 142 148 135 142 130 135 C 122 140 115 152 108 160 C 102 150 112 130 120 118 Z" />

          {/* Left Shoulder & Arm */}
          <path d="M 198 92 C 212 96 226 108 238 122 C 244 130 248 142 250 150 C 242 148 232 142 225 136 C 218 130 210 120 205 110 Z" />

          {/* Flexed Bicep & Arm (Curved Bicep Peak & Forearm) */}
          <path d="M 122 96 C 112 90 98 94 90 102 C 82 110 74 122 72 135 C 70 142 75 144 82 138 C 90 130 100 118 112 114 Z" />
          <path d="M 92 100 C 95 86 105 70 115 58 C 122 50 128 44 132 44 C 135 44 135 49 130 55 C 122 65 114 78 110 90 C 105 95 98 98 92 100 Z" />
          {/* Fist & Clenched Forearm */}
          <path d="M 126 44 C 128 40 134 38 138 41 C 142 44 142 50 138 54 C 134 57 128 54 126 50 Z" />
          <path d="M 108 68 C 115 62 125 58 132 58 C 128 66 120 74 112 78 Z" />
        </g>

        {/* Barbell Left */}
        <g stroke={primaryColor} strokeWidth="3" strokeLinecap="round">
          <line x1="38" y1="235" x2="98" y2="235" />
          <rect x="42" y="222" width="4" height="26" fill={primaryColor} rx="1" />
          <rect x="50" y="217" width="5" height="36" fill={primaryColor} rx="1.5" />
          <rect x="59" y="212" width="6" height="46" fill={primaryColor} rx="2" />
          {/* Bar collar */}
          <circle cx="70" cy="235" r="3.5" fill={primaryColor} />
          {/* Shaft diagonal brace */}
          <line x1="88" y1="210" x2="102" y2="250" strokeWidth="4" />
        </g>

        {/* Barbell Right */}
        <g stroke={primaryColor} strokeWidth="3" strokeLinecap="round">
          <line x1="222" y1="235" x2="282" y2="235" />
          <rect x="274" y="222" width="4" height="26" fill={primaryColor} rx="1" />
          <rect x="265" y="217" width="5" height="36" fill={primaryColor} rx="1.5" />
          <rect x="255" y="212" width="6" height="46" fill={primaryColor} rx="2" />
          {/* Bar collar */}
          <circle cx="250" cy="235" r="3.5" fill={primaryColor} />
          {/* Shaft diagonal brace */}
          <line x1="232" y1="210" x2="218" y2="250" strokeWidth="4" />
        </g>

        {/* Center Text: BODY FIT */}
        <text
          x="160"
          y="196"
          textAnchor="middle"
          fill={primaryColor}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="44"
          letterSpacing="1.5"
        >
          BODY FIT
        </text>

        {/* Sub Text: GYM */}
        <text
          x="160"
          y="245"
          textAnchor="middle"
          fill={primaryColor}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="34"
          letterSpacing="4"
        >
          GYM
        </text>

        {/* 3 Stars at bottom of shield */}
        <g fill={primaryColor}>
          {/* Left star */}
          <polygon points="135,264 137.5,270.5 144,271 139,275 140.5,281.5 135,278 129.5,281.5 131,275 126,271 132.5,270.5" />
          {/* Center star (slightly larger) */}
          <polygon points="160,268 163,275.5 171,276 165,281 167,288.5 160,284.5 153,288.5 155,281 149,276 157,275.5" />
          {/* Right star */}
          <polygon points="185,264 187.5,270.5 194,271 189,275 190.5,281.5 185,278 179.5,281.5 181,275 176,271 182.5,270.5" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-white leading-none">
            Body Fit <span className="text-amber-500">Gym</span>
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400 font-semibold mt-0.5">
            Unisex Multi Gym &amp; Club
          </span>
        </div>
      )}
    </div>
  );
};
