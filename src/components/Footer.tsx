import icX from '../assets/ic_x.svg'
import icWhatsapp from '../assets/ic_whatsapp.svg'
import icInstagram from '../assets/ic_integram.svg'

export default function Footer() {
  return (
    <footer id="contacts" className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 Plantified, Grown with care.</p>
        <div className="social-row">
          <a href="https://x.com/plantified" aria-label="Plantified on X" rel="noopener">
            <img src={icX} alt="" width="20" height="20" />
          </a>
          <a href="https://wa.me/plantified" aria-label="Plantified on WhatsApp" rel="noopener">
            <img src={icWhatsapp} alt="" width="22" height="22" />
          </a>
          <a href="https://instagram.com/plantified" aria-label="Plantified on Instagram" rel="noopener">
            <img src={icInstagram} alt="" width="22" height="22" />
          </a>
        </div>
      </div>
    </footer>
  )
}
