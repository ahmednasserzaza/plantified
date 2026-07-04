import Reveal from './Reveal'
import {
  CloudIcon,
  DropletIcon,
  LeafIcon,
  MoonIcon,
  ScissorsIcon,
  ShieldIcon,
  SunIcon,
  ThermometerIcon,
  WindIcon,
  ZapIcon,
} from './seasonIcons'
import art3 from '../assets/art_3.svg'
import art4 from '../assets/art_4.svg'

const seasons = [
  {
    name: 'Spring',
    months: 'March–May',
    icon: <SunIcon />,
    accent: '#4a9d5a',
    iconBg: '#e0eed9',
    tips: [
      { icon: <DropletIcon size={14} />, text: 'Water every 3 days' },
      { icon: <LeafIcon size={14} />, text: 'Add fertilizer' },
      { icon: <ZapIcon size={14} />, text: 'Move to bright light' },
    ],
  },
  {
    name: 'Summer',
    months: 'June–August',
    icon: <SunIcon />,
    accent: '#f5a623',
    iconBg: '#faefc4',
    tips: [
      { icon: <DropletIcon size={14} />, text: 'Water daily' },
      { icon: <WindIcon size={14} />, text: 'Increase air circulation' },
      { icon: <ShieldIcon size={14} />, text: 'Protect from heat' },
    ],
  },
  {
    name: 'Autumn',
    months: 'September–November',
    icon: <LeafIcon />,
    accent: '#f97316',
    iconBg: '#fae8d1',
    tips: [
      { icon: <DropletIcon size={14} />, text: 'Reduce watering' },
      { icon: <ScissorsIcon size={14} />, text: 'Prune old growth' },
      { icon: <ThermometerIcon size={14} />, text: 'Watch temperature' },
    ],
  },
  {
    name: 'Winter',
    months: 'December–February',
    icon: <CloudIcon />,
    accent: '#6366f1',
    iconBg: '#dce2fa',
    tips: [
      { icon: <DropletIcon size={14} />, text: 'Water sparingly' },
      { icon: <MoonIcon size={14} />, text: 'Reduce light' },
      { icon: <ShieldIcon size={14} />, text: 'Protect from drafts' },
    ],
  },
]

export default function SeasonalCare() {
  return (
    <section id="care" className="seasonal" aria-labelledby="seasonal-title">
      <div className="container">
        <Reveal>
          <div className="seasonal-card">
            {/* Two-state hanging-plant vector from the design (art_3 / art_4),
                stacked at the same spot and cross-faded so it looks like the
                plant is gently moving in the air. */}
            <div className="hanging-plant" aria-hidden>
              <img src={art3} alt="" className="hanging-plant-a" width="150" height="303" />
              <img src={art4} alt="" className="hanging-plant-b" width="151" height="306" />
            </div>
            <h2 id="seasonal-title">Care at the Right Time</h2>
            <p className="seasonal-sub">Know exactly when to water, feed, and repot</p>
            <div className="seasons-grid">
              {seasons.map((season, i) => (
                <Reveal key={season.name} delay={i * 130}>
                  <div>
                    <div className="season-head">
                      <span
                        className="season-icon"
                        style={{ color: season.accent, background: season.iconBg }}
                      >
                        {season.icon}
                      </span>
                      <h3>
                        {season.name}
                        <small>{season.months}</small>
                      </h3>
                    </div>
                    <ul className="season-tips">
                      {season.tips.map((tip) => (
                        <li key={tip.text}>
                          <span className="tip-chip">
                            <span className="tip-icon" style={{ color: season.accent }}>
                              {tip.icon}
                            </span>
                            {tip.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
