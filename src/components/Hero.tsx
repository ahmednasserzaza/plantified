import Reveal from './Reveal'
import { ArrowRightDesignIcon } from './designIcons'
import art1 from '../assets/art_1.svg'
import art2 from '../assets/art_2.svg'

const heroMonsteraSrc = `${import.meta.env.BASE_URL}hero-monstera.webp`

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal>
            {/* Two sprig states cross-faded so the branch gently moves in the air. */}
            <span className="hero-sprig" aria-hidden>
              <img src={art1} alt="" className="hero-sprig-a" width="264" height="137" />
              <img src={art2} alt="" className="hero-sprig-b" width="264" height="142" />
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1>
              Life is too short, Bring a<br />
              <span className="accent">green</span> friend
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="hero-sub">
              Your screen shouldn't be the only thing you look at all day. Breathe life back into
              your workspace with low maintenance desk plants designed for busy minds.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-chips">
              <span className="chip">A plant won't interrupt you</span>
              <span className="chip">A cute little roommate</span>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="hero-actions">
              <a href="#plants" className="btn-primary">
                Find Your Plant Friend
                <span className="btn-circle">
                  <ArrowRightDesignIcon size={18} />
                </span>
              </a>
              <a href="#care" className="btn-secondary">
                Explore
              </a>
            </div>
          </Reveal>
        </div>

        {/* The sage circle lives inside the visual so it's attached to the plant. */}
        <div className="hero-visual">
          <span className="hero-circle" aria-hidden />
          <img
            src={heroMonsteraSrc}
            alt="A hand holding a monstera plant in a white pot"
            width="443"
            height="449"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
