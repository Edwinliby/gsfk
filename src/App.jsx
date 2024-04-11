import Navbar from './components/Navbar/navbar'
import HeroSection from './sections/HeroSection/heroSection'
import AboutSection from './sections/aboutSection/aboutSection'
import DescSection from './sections/DescSection/descSection'
import CollabSection from './sections/CollabSection/collabSection'
import Footer from './components/Footer/footer'
import Loader from './components/Loader/loader'

import { useEffect, useState } from 'react'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5800)
  })

  return (
    <div>
      {loading ? <Loader /> : (
        <div>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <DescSection />
          <CollabSection />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default App
