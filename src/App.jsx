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
<div className="bg-brand-white text-brand-gray">
<Navbar />
<main className="pt-24">
<Hero />
<About />
<Services />
<Technologies />
<Portfolio />
<Contact />
<Footer />
</main>
</div>
)
}