import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { CartIcon, HeartDesignIcon, NotificationIcon } from './designIcons'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#categories', label: 'Categories' },
  { href: '#blog', label: 'Blog' },
  { href: '#contacts', label: 'Contacts' },
  { href: '#about', label: 'About us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Keep the underline glued to the active tab: re-measure when the active
  // tab changes, when fonts finish loading, and when the window resizes.
  useLayoutEffect(() => {
    const measure = () => {
      const nav = navRef.current
      const link = linkRefs.current[active]
      if (!nav || !link) return
      const navBox = nav.getBoundingClientRect()
      const linkBox = link.getBoundingClientRect()
      setIndicator({ left: linkBox.left - navBox.left, width: linkBox.width })
    }
    measure()
    document.fonts?.ready.then(measure)
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="Plantified home">
          Plantified
        </a>

        <nav ref={navRef} className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          <ul>
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  ref={(el) => {
                    linkRefs.current[i] = el
                  }}
                  href={link.href}
                  aria-current={i === active ? 'page' : undefined}
                  onClick={() => {
                    setActive(i)
                    setOpen(false)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <span
            className="nav-indicator"
            style={{ left: indicator.left, width: indicator.width }}
            aria-hidden
          />
        </nav>

        <div className="header-icons">
          <button type="button" className="icon-btn" aria-label="Notifications">
            <NotificationIcon />
          </button>
          <button type="button" className="icon-btn" aria-label="Favorites">
            <HeartDesignIcon />
          </button>
          <button type="button" className="icon-btn" aria-label="Shopping cart">
            <CartIcon />
          </button>
          <button
            type="button"
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
