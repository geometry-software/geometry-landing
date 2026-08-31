import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Technologies from './components/Technologies'
import Pricing from './components/Pricing'
import PilotOffer from './components/PilotOffer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-text)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <PilotOffer />
        <Technologies />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
