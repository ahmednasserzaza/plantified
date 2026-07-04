import { useState } from 'react'
import Reveal from './Reveal'
import { BasketIcon, HeartDesignIcon, RulerDesignIcon, WaterPumpIcon } from './designIcons'
import art5 from '../assets/art_5.svg'
import cactusImg from '../assets/plant-cactus-spike.webp'
import aloeImg from '../assets/plant-aloe.webp'
import snakeImg from '../assets/plant-snake.webp'
import monsteraImg from '../assets/plant-monstera.webp'
import pileaImg from '../assets/plant-pilea.webp'
import pothosImg from '../assets/plant-pothos.webp'

type Plant = {
  id: string
  name: string
  description: string
  lifespan: string
  height: string
  watering: string
  price: string
  image: string
  alt: string
}

/** All six plants' names, descriptions, stats, and prices are verbatim from
 *  the design's Component page variants (including its name/photo pairings). */
const plants: Plant[] = [
  {
    id: 'spike',
    name: 'Cactus: Spike',
    description:
      "The ultimate minimalist companion for your workspace. Spike doesn't care about drama, never complains about the dry office air, and is perfectly happy being ignored for weeks. It stores its own water and guards your desk like a tiny, green, prickly soldier.",
    lifespan: '10 – 50 Years',
    height: '15 – 30 cm',
    watering: '1x / Month',
    price: '18.99$',
    image: cactusImg,
    alt: 'Spike, a flowering columnar cactus in a light green pot',
  },
  {
    id: 'aloe',
    name: 'Aloe Vera',
    description:
      'Bella is the calming presence your stressful workweek needs. With its soothing, plump, gel-filled leaves, it acts like a little natural healthcare worker on your desk. It looks incredibly neat, clean, and adds a peaceful, refreshing aura to any workspace.',
    lifespan: '5 – 25 Years',
    height: '60 – 90 cm',
    watering: '1x / 3 Weeks',
    price: '24.99$',
    image: aloeImg,
    alt: 'Bella, an aloe vera plant in a dark green pot',
  },
  {
    id: 'snake',
    name: 'Snake Plant',
    description:
      "Zeus is practically immortal and thrives on absolute neglect. Whether your office has zero sunlight or you forget to water it for a month, Zeus just keeps standing tall and sharp. It's the best plant for beginners who want maximum green vibes with zero effort.",
    lifespan: '5 – 12 Years',
    height: '30 – 45 cm',
    watering: '1x / 2 Weeks',
    price: '29.99$',
    image: snakeImg,
    alt: 'Zeus, a snake plant in a white pot',
  },
  {
    id: 'pothos',
    name: 'Pothos',
    description:
      'Ivy is the overachiever of the plant world. Give it just a tiny bit of water and a splash of light, and its beautiful cascading vines will start growing rapidly. It loves to climb around monitors, shelves, and looks like a living, green waterfall on your desk.',
    lifespan: '5 – 10 Years',
    height: '1 – 2 m',
    watering: '1x / Week',
    price: '32.99$',
    image: monsteraImg,
    alt: 'Ivy, a lush pothos plant in a white pot',
  },
  {
    id: 'monstera',
    name: 'Monstera',
    description:
      "Monty is the undisputed king of aesthetic workspaces. With its iconic, large, split leaves, it instantly elevates your desk from a boring workspace to a luxury aesthetic cafe. It's a bit dramatic and loves to take up its own space, but it knows it looks good.",
    lifespan: '15 – 30 Years',
    height: '1 – 1.5 m',
    watering: '1x / Week',
    price: '15.99$',
    image: pothosImg,
    alt: 'Monty, a trailing monstera plant in a terracotta pot',
  },
  {
    id: 'pilea',
    name: 'Pilea',
    description:
      'Penny brings a unique, playful energy to your desk with its perfectly round, coin-shaped leaves balancing on delicate stems. It pops out tiny baby plants constantly, making it the perfect "friendship plant" to pass around to your favorite coworkers.',
    lifespan: '5 – 10 Years',
    height: '20 – 30 cm',
    watering: '1x / Week',
    price: '15.99$',
    image: pileaImg,
    alt: 'Penny, a Chinese money plant in a white pot',
  },
]

export default function PlantPicker() {
  const [active, setActive] = useState(0)
  const [switching, setSwitching] = useState(false)
  const plant = plants[active]

  const selectPlant = (index: number) => {
    if (index === active) return
    // Fade the current plant + copy out, then swap. The incoming image is
    // keyed so it remounts and replays the slide-up enter animation, matching
    // the Figma prototype's smart-animate (new plant rises up + cross-dissolve).
    setSwitching(true)
    window.setTimeout(() => {
      setActive(index)
      setSwitching(false)
    }, 200)
  }

  return (
    <section id="plants" className="picker" aria-label="Featured plants">
      <img src={art5} alt="" className="picker-art" />
      <div className="container">
        <div className="picker-grid">
          <Reveal className={`picker-photo ${switching ? 'is-switching' : ''}`}>
            <img key={plant.id} src={plant.image} alt={plant.alt} width="300" height="400" />
          </Reveal>
          <div className={`picker-info ${switching ? 'is-switching' : ''}`} aria-live="polite">
            <Reveal delay={100}>
              <h2>{plant.name}</h2>
            </Reveal>
            <Reveal delay={180}>
              <p>{plant.description}</p>
            </Reveal>
            <Reveal delay={260}>
              <div className="picker-stats">
                <div className="pstat">
                  <HeartDesignIcon size={22} />
                  <div>
                    <small>Lifespan</small>
                    <b>{plant.lifespan}</b>
                  </div>
                </div>
                <div className="pstat">
                  <RulerDesignIcon size={22} />
                  <div>
                    <small>Avg Height</small>
                    <b>{plant.height}</b>
                  </div>
                </div>
                <div className="pstat">
                  <WaterPumpIcon size={22} />
                  <div>
                    <small>Watering</small>
                    <b>{plant.watering}</b>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <button type="button" className="btn-add">
                Add to my desk
                <span className="dot" aria-hidden />
                <span className="price-val">{plant.price}</span>
                <span className="btn-circle">
                  <BasketIcon size={20} />
                </span>
              </button>
            </Reveal>
          </div>
        </div>

        <Reveal className="picker-thumbs" as="div" delay={200}>
          {plants.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`thumb ${i === active ? 'is-active' : ''}`}
              aria-label={`Show ${p.name}`}
              aria-pressed={i === active}
              onClick={() => selectPlant(i)}
            >
              <img src={p.image} alt="" width="54" height="54" loading="lazy" />
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
