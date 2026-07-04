import { Fragment } from 'react'
import Reveal from './Reveal'
import icPackage from '../assets/ic_package.svg'
import icRain from '../assets/ic_rain.svg'
import icRecycle from '../assets/ic_recycle.svg'
import icPlant from '../assets/ic_plant.svg'
import arrow1 from '../assets/ic_first_arrow.svg'
import arrow2 from '../assets/ic_second_arrow.svg'
import arrow3 from '../assets/ic_third_arrow.svg'

const steps = [
  {
    icon: icPackage,
    title: 'Unboxing',
    text: 'Let the leaves settle and acclimate to your light.',
  },
  {
    icon: icRain,
    title: 'First Mist',
    text: 'Apply a light moisture layer after 48 hours.',
  },
  {
    icon: icRecycle,
    title: 'Routine',
    text: 'Establish a weekly cadence for feeding and care.',
  },
  {
    icon: icPlant,
    title: 'Watch it grow',
    text: 'After a short time, your plant will love you because you take care of it.',
  },
]

const connectors = [arrow1, arrow2, arrow3]

export default function CareSteps() {
  return (
    <section id="blog" className="care-steps" aria-labelledby="care-steps-title">
      <div className="container">
        <Reveal className="steps-title">
          <h2 id="care-steps-title">Small Care, Big Rewards</h2>
        </Reveal>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <Fragment key={step.title}>
              {i > 0 && (
                <Reveal delay={i * 150}>
                  <img src={connectors[i - 1]} alt="" className="step-connector" />
                </Reveal>
              )}
              <Reveal delay={i * 150 + 60}>
                <div className="step">
                  <span className="step-icon">
                    <img src={step.icon} alt="" width="24" height="24" />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
