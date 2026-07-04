import Reveal from './Reveal'
import art6 from '../assets/art_6.svg'
import ivyImg from '../assets/card-ivy.webp'
import mintImg from '../assets/card-mint.webp'
import spikeImg from '../assets/card-spike.webp'

const products = [
  {
    price: '24.99$',
    titleTop: 'Always you Busy?',
    titleBottom: 'Meet Ivy',
    image: ivyImg,
    alt: 'An English ivy plant in a white pot on a marble desk',
  },
  {
    price: '5.99$',
    titleTop: 'Need for inspiration?',
    titleBottom: 'Meet mint',
    image: mintImg,
    alt: 'Fresh mint leaves growing in soil',
  },
  {
    price: '16.99$',
    titleTop: 'Always on the move?',
    titleBottom: 'Meet Spike',
    image: spikeImg,
    alt: 'A golden barrel cactus in a green pot',
  },
]

export default function Products() {
  return (
    <section id="categories" className="products" aria-labelledby="products-tagline">
      <div className="container">
        <div className="products-blob">
          <img src={art6} alt="" className="products-sprig" width="108" height="260" />
          <div className="products-grid">
            {products.map((product, i) => (
              <Reveal key={product.titleBottom} delay={i * 140}>
                <article className="product-card">
                  <div className="product-media">
                    <span className="price-badge">{product.price}</span>
                    <img src={product.image} alt={product.alt} width="380" height="380" loading="lazy" />
                  </div>
                  <h3>
                    <span>{product.titleTop}</span>
                    <span>{product.titleBottom}</span>
                  </h3>
                  <a href="#plants" className="view-details">
                    View Details
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p id="products-tagline" className="products-tagline">
              Different plants, Different personalities.
              <br />
              Find the one that feels most like you.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
