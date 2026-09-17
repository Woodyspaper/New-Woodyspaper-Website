import { AdvisorSection } from './components/AdvisorSection'
import { BackgroundDecor } from './components/BackgroundDecor'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { InquirySection } from './components/InquirySection'
import { InventorySection } from './components/InventorySection'
import { UtilityBar } from './components/UtilityBar'

export default function App() {
  return (
    <div id="top" className="relative text-slate-800">
      <BackgroundDecor />
      <UtilityBar />
      <Header />

      <main className="relative z-10 pt-chrome lg:pt-chrome-lg">
        <HeroSection />
        <InventorySection />
        <AdvisorSection />
        <InquirySection />
      </main>

      <Footer />
    </div>
  )
}
