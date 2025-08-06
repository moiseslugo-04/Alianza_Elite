import Hero from './pages/Hero.jsx'
import About from './pages/About.jsx'
import FeaturesSection from './pages/FeaturesSection.jsx'
import UpcomingEvents from './pages/UpcomingEvents.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './pages/Footer.jsx'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Hero />
      <About />
      <FeaturesSection />
      <UpcomingEvents />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
