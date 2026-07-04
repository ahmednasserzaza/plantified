/**
 * Decorative line-art vectors redrawn from the Figma design.
 * All strokes inherit `currentColor` so sections can tint them.
 */

export const SprigArt = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 215 90" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" aria-hidden>
    <path d="M2 52C60 44 130 36 213 10" />
    <path d="M42 48C50 30 64 18 84 12M52 47C62 34 76 26 94 22M66 44C78 34 92 29 108 27M84 41C96 34 110 31 124 31" />
    <path d="M46 51C58 58 72 61 90 60M62 49C74 55 88 57 104 55M80 46C92 51 106 52 120 50" />
    <path d="M120 34C134 26 150 20 170 17M138 30C152 24 166 20 182 18" />
  </svg>
)

export const FernArt = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 260" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
    <path d="M60 250C110 190 180 110 290 20" />
    <path d="M120 180c-30-4-52-18-64-42 28-2 50 10 64 42zM120 180c8-32 26-52 56-62 0 30-18 50-56 62z" />
    <path d="M170 128c-26-2-44-14-54-36 24-2 42 8 54 36zM170 128c6-28 22-44 48-52 0 26-16 42-48 52z" />
    <path d="M215 82c-20-2-34-10-42-27 18-2 32 6 42 27zM215 82c4-22 16-34 36-40 0 20-12 32-36 40z" />
    <path d="M252 46c-14-1-24-7-30-19 13-1 23 4 30 19zM252 46c3-15 11-24 25-28 0 14-8 23-25 28z" />
  </svg>
)

export const DashConnector = ({ className, flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    className={className}
    viewBox="0 0 64 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeDasharray="4 5"
    aria-hidden
    style={flip ? { transform: 'scaleY(-1)' } : undefined}
  >
    <path d="M2 18C18 4 46 4 62 16" />
    <path d="M56 12l6 4-7 3" strokeDasharray="none" />
  </svg>
)

/**
 * Hanging pothos vector for the seasonal-care card. The inner group is the
 * "second state" from the design's component page, reproduced as a CSS sway.
 */
export const HangingPlantArt = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 150 210" fill="none" aria-hidden>
    <g className="sway-layer">
      <rect x="55" y="18" width="40" height="34" rx="4" fill="#c9d6bc" />
      <path d="M55 18h40l-5 34h-30z" fill="#b7c7a6" />
      <path d="M75 2v16" stroke="#7f9b70" strokeWidth="2" />
      <g fill="#7f9b70">
        <path d="M62 52c-8 14-18 22-26 26 2 10 10 14 18 10s12-20 8-36z" opacity="0.85" />
        <path d="M88 52c8 16 16 26 26 32-2 10-12 12-20 6s-10-24-6-38z" opacity="0.9" />
        <path d="M70 54c-4 22-10 38-20 50 6 8 16 6 20-4s4-30 0-46z" />
        <path d="M80 54c6 24 4 44-4 62 8 4 16-2 18-12s-4-34-14-50z" opacity="0.8" />
        <ellipse cx="38" cy="86" rx="7" ry="11" transform="rotate(28 38 86)" />
        <ellipse cx="116" cy="94" rx="7" ry="11" transform="rotate(-24 116 94)" />
        <ellipse cx="52" cy="120" rx="7" ry="11" transform="rotate(16 52 120)" />
        <ellipse cx="98" cy="132" rx="7" ry="11" transform="rotate(-12 98 132)" />
        <ellipse cx="62" cy="152" rx="6" ry="10" transform="rotate(10 62 152)" />
        <ellipse cx="88" cy="170" rx="6" ry="10" transform="rotate(-8 88 170)" />
        <ellipse cx="72" cy="190" rx="6" ry="9" />
      </g>
      <path d="M40 84c4 14 8 26 18 38M112 92c-2 16-8 30-20 44M60 150c2 14 6 26 14 38" stroke="#7f9b70" strokeWidth="1.6" fill="none" />
    </g>
  </svg>
)

export const BotanicalArt = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 110 180" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden>
    <path d="M55 178C50 120 52 60 66 6" />
    <path d="M60 42c-12-6-20-16-22-32 14 4 22 15 22 32zM58 74c-11-5-19-14-21-28 13 3 20 13 21 28zM56 106c-11-5-18-13-21-26 13 3 20 12 21 26z" />
    <path d="M62 36c9-9 19-12 31-11-3 12-13 19-31 11zM60 68c8-8 18-11 29-10-3 12-12 18-29 10zM58 100c8-8 17-10 28-9-3 11-12 17-28 9z" />
    <circle cx="38" cy="10" r="2.4" /><circle cx="93" cy="25" r="2.4" /><circle cx="30" cy="46" r="2" />
  </svg>
)
