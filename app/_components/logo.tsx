export default function Logo({width, height}: {width?: number; height?: number}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 160"
      width={width || 60}
      height={height || 60}
    >
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#764ba2", stopOpacity: 1 }} />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#glow)" transform="translate(70, 80)">
        <path
          d="
            M -50,-80 L -50,80 L 20,80 
            C 50,80 70,65 70,40 
            C 70,20 60,10 45,5 
            C 60,0 70,-10 70,-35 
            C 70,-60 50,-80 20,-80 Z

            M -20,-55 L 15,-55 
            C 30,-55 40,-45 40,-35 
            C 40,-25 30,-15 15,-15 
            L -20,-15 Z

            M -20,15 L 20,15 
            C 35,15 45,25 45,40 
            C 45,55 35,55 20,55 
            L -20,55 Z
          "
          fill="url(#blueGradient)"
          stroke="url(#blueGradient)"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
