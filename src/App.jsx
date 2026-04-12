import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Technologies from './components/Technologies'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-text)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}