import { Logo } from './Logo'

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-brand"><div className="footer-logo"><Logo /></div><p>South Florida's trusted wholesale supply partner for high-volume packaging and tissue products.</p></div>
        <div><h4>Area Serviced</h4><p>Serving South Florida</p></div>
        <div><h4>Contact</h4><a href="tel:7547011797">(754) 701-1797</a><a href="mailto:info@woodyspaper.com">info@woodyspaper.com</a></div>
      </div>
      <div className="wrap footer-bottom"><span>© 2026 Woody's Paper</span><span>Supply Chain Optimization v49</span></div>
    </footer>
  )
}
