import './App.css'
import { AdvisorSection } from './components/AdvisorSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { InquirySection } from './components/InquirySection'
import { InventorySection } from './components/InventorySection'

function App() {
  return (
    <main id="top">
      <Header />
      <HeroSection />
      <InventorySection />
      <AdvisorSection />
      <InquirySection />
      <Footer />
    </main>
  )
}

export default App