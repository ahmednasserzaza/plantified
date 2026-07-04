import {type FormEvent, useState} from 'react'
import Reveal from './Reveal'
import art7 from "../assets/art_7.svg";

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <section id="about" className="newsletter" aria-labelledby="newsletter-title">
      <div className="container">
        <Reveal>
          <div className="newsletter-card">
            <img src={art7} alt="" className="newsletter-sprig" width="108" height="260" />
            <h2 id="newsletter-title">Find the plant that grows with you.</h2>
            <p>
              Join 50,000+ urban dwellers who have rediscovered the joy of quiet growth. Delivered
              with care, straight to your door.
            </p>
            {subscribed ? (
              <p role="status" className="newsletter-status">
                Welcome to the club! Check your inbox soon. 🌱
              </p>
            ) : (
              <form className="newsletter-form" onSubmit={onSubmit}>
                <label
                  htmlFor="newsletter-email"
                  style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}
                >
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email here"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn-send">
                  Send
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
