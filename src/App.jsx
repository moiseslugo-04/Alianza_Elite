import Hero from './pages/Hero.jsx'
import About from './pages/About.jsx'
import FeaturesSection from './pages/FeaturesSection.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'
import LanguageSwictcher from './components/LanguageSwictcher.jsx'
import Galeria from './pages/Gallery.jsx'
import Carrusel from './pages/Carrusel.jsx'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <LanguageSwictcher/>
      <Hero />
      <About />
      <Carrusel/>
      <FeaturesSection />
      <Galeria/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
