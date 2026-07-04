type IconProps = {
  size?: number
}

const base = (size: number, strokeWidth = 1.7) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export const BellIcon = ({ size = 21 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M18 9a6 6 0 1 0-12 0c0 6-2.5 7-2.5 7h17S18 15 18 9z" />
    <path d="M10.3 20a2 2 0 0 0 3.4 0" />
  </svg>
)

export const HeartIcon = ({ size = 21 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 20.5s-8.5-5.1-8.5-11A4.6 4.6 0 0 1 12 6.7a4.6 4.6 0 0 1 8.5 2.8c0 5.9-8.5 11-8.5 11z" />
  </svg>
)

export const BagIcon = ({ size = 21 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M5.5 8h13l-.9 12a1.5 1.5 0 0 1-1.5 1.4H7.9A1.5 1.5 0 0 1 6.4 20z" />
    <path d="M9 10V6.5a3 3 0 0 1 6 0V10" />
  </svg>
)

export const ArrowRightIcon = ({ size = 17 }: IconProps) => (
  <svg {...base(size, 1.9)}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)

export const BagPlusIcon = ({ size = 17 }: IconProps) => (
  <svg {...base(size, 1.8)}>
    <path d="M5.5 8h13l-.9 11.5a1.5 1.5 0 0 1-1.5 1.4H7.9a1.5 1.5 0 0 1-1.5-1.4z" />
    <path d="M9 10V6.5a3 3 0 0 1 6 0V10M12 12.5v5M9.5 15h5" />
  </svg>
)

export const HeartThinIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size, 1.5)}>
    <path d="M12 20.5s-8.5-5.1-8.5-11A4.6 4.6 0 0 1 12 6.7a4.6 4.6 0 0 1 8.5 2.8c0 5.9-8.5 11-8.5 11z" />
  </svg>
)

export const RulerIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size, 1.5)}>
    <rect x="2.6" y="9.5" width="18.8" height="5" rx="1.4" transform="rotate(-42 12 12)" />
    <path d="M8.6 11.5l1.6 1.6M11.6 8.7l1.6 1.6M14.5 5.9l1.6 1.6" />
  </svg>
)

export const WateringCanIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size, 1.5)}>
    <path d="M8 10h8v9a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 19z" />
    <path d="M8 12l-4.4-3.4a1.2 1.2 0 0 1 1.5-1.9L8 9M16 12.5c2 0 3.5-1.5 3.5-3.5" />
    <circle cx="12" cy="7" r="1.6" />
  </svg>
)

export const BoxIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size, 1.6)}>
    <path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z" />
    <path d="M3.5 7.5L12 12l8.5-4.5M12 12v9" />
  </svg>
)

export const MistIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size, 1.6)}>
    <path d="M9 5.5s2.4 2.8 2.4 4.5a2.4 2.4 0 0 1-4.8 0C6.6 8.3 9 5.5 9 5.5z" />
    <path d="M16 11s1.8 2.2 1.8 3.5a1.8 1.8 0 0 1-3.6 0c0-1.3 1.8-3.5 1.8-3.5zM10 16.5s1.4 1.7 1.4 2.7a1.4 1.4 0 0 1-2.8 0c0-1 1.4-2.7 1.4-2.7z" />
  </svg>
)

export const RoutineIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size, 1.6)}>
    <path d="M12 21a8 8 0 1 1 8-8" />
    <path d="M12 8v5l3.2 1.8M20 10.5l.4 2.8-2.7-.7" />
  </svg>
)

export const SproutIcon = ({ size = 22 }: IconProps) => (
  <svg {...base(size, 1.6)}>
    <path d="M12 20v-7" />
    <path d="M12 13c0-3.5 2.4-6 6.5-6.3.2 3.8-2.3 6.3-6.5 6.3z" fill="currentColor" fillOpacity="0.18" />
    <path d="M12 11C12 8.2 10 6.2 6.7 6c-.2 3 1.8 5 5.3 5z" fill="currentColor" fillOpacity="0.3" />
    <path d="M7 20h10" />
  </svg>
)

export const SunIcon = ({ size = 20 }: IconProps) => (
  <svg {...base(size, 1.6)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2M12 19v2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M3 12h2M19 12h2M5.6 18.4L7 17M17 7l1.4-1.4" />
  </svg>
)

export const LeafFallIcon = ({ size = 20 }: IconProps) => (
  <svg {...base(size, 1.6)}>
    <path d="M5 19C5 11 9.5 6.5 19 5c-1 9.5-5.5 14-14 14z" />
    <path d="M5 19c3.5-3.5 7-7 10-10" />
  </svg>
)

export const SnowCloudIcon = ({ size = 20 }: IconProps) => (
  <svg {...base(size, 1.6)}>
    <path d="M6.5 15A4.5 4.5 0 0 1 7 6a5.5 5.5 0 0 1 10.5 1.5A3.8 3.8 0 0 1 17 15z" />
    <path d="M8 18.5v.01M12 18.5v.01M16 18.5v.01M10 21v.01M14 21v.01" strokeWidth="2.2" />
  </svg>
)

export const DropIcon = ({ size = 14 }: IconProps) => (
  <svg {...base(size, 1.7)}>
    <path d="M12 3.5s5.5 6 5.5 10a5.5 5.5 0 0 1-11 0c0-4 5.5-10 5.5-10z" />
  </svg>
)

export const FertilizerIcon = ({ size = 14 }: IconProps) => (
  <svg {...base(size, 1.7)}>
    <path d="M12 20v-6" />
    <path d="M12 14c0-3 2-5.2 5.5-5.4.2 3.2-2 5.4-5.5 5.4zM12 12.5c0-2.4-1.7-4.1-4.5-4.3-.1 2.6 1.6 4.3 4.5 4.3z" />
  </svg>
)

export const BrightIcon = ({ size = 14 }: IconProps) => (
  <svg {...base(size, 1.7)}>
    <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1" />
  </svg>
)

export const FanIcon = ({ size = 14 }: IconProps) => (
  <svg {...base(size, 1.7)}>
    <path d="M12 12m-1.6 0a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0-3.2 0" />
    <path d="M12 10.4C12 6.9 10 5 7.2 5.6c-.3 2.9 1.3 4.8 4.8 4.8zM13.6 12c3.5 0 5.4 2 4.8 4.8-2.9.3-4.8-1.3-4.8-4.8zM12 13.6c0 3.5-2 5.4-4.8 4.8-.3-2.9 1.3-4.8 4.8-4.8zM13.6 12c0-3.5 2-5.4 4.8-4.8.3 2.9-1.3 4.8-4.8 4.8z" />
  </svg>
)

export const ShieldSunIcon = ({ size = 14 }: IconProps) => (
  <svg {...base(size, 1.7)}>
    <path d="M12 3l7 2.8v5c0 4.4-2.9 7.7-7 9.2-4.1-1.5-7-4.8-7-9.2v-5z" />
    <circle cx="12" cy="11" r="2.4" />
  </svg>
)

export const ScissorsIcon = ({ size = 14 }: IconProps) => (
  <svg {...base(size, 1.7)}>
    <circle cx="6.5" cy="7" r="2.5" />
    <circle cx="6.5" cy="17" r="2.5" />
    <path d="M8.7 8.5L20 19M8.7 15.5L20 5" />
  </svg>
)

export const ThermometerIcon = ({ size = 14 }: IconProps) => (
  <svg {...base(size, 1.7)}>
    <path d="M10.5 4a1.5 1.5 0 0 1 3 0v9.3a4 4 0 1 1-3 0z" />
    <circle cx="12" cy="17" r="1.4" fill="currentColor" stroke="none" />
  </svg>
)

export const MoonIcon = ({ size = 14 }: IconProps) => (
  <svg {...base(size, 1.7)}>
    <path d="M20 13.5A8 8 0 0 1 10.5 4 8 8 0 1 0 20 13.5z" />
  </svg>
)

export const WindShieldIcon = ({ size = 14 }: IconProps) => (
  <svg {...base(size, 1.7)}>
    <path d="M3 8h9a2.5 2.5 0 1 0-2.5-2.5M3 12h13a2.5 2.5 0 1 1-2.5 2.5M3 16h7a2 2 0 1 1-2 2" />
  </svg>
)

export const XIcon = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.9 3H22l-7 8L23.3 21h-6.4l-5-6.2L6 21H2.9l7.5-8.6L1 3h6.6l4.5 5.7zM17.8 19.2h1.7L6.7 4.7H4.9z" />
  </svg>
)

export const WhatsAppIcon = ({ size = 19 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.7l.5-.6c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7a11.1 11.1 0 0 0 4.3 3.8c.6.2 1.1.4 1.4.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.6-.4z" />
  </svg>
)

export const InstagramIcon = ({ size = 19 }: IconProps) => (
  <svg {...base(size, 1.8)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)
