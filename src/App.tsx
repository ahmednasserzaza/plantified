import Header from './components/Header'
import Hero from './components/Hero'
import PlantPicker from './components/PlantPicker'
import Products from './components/Products'
import CareSteps from './components/CareSteps'
import SeasonalCare from './components/SeasonalCare'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PlantPicker />
        <Products />
        <CareSteps />
        <SeasonalCare />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
