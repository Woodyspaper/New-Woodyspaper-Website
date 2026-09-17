export function HeroSection() {
  return (
    <section className="hero">
      <div className="cube cube-one">◇</div>
      <div className="cube cube-two">◇</div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>Sustainably Sourced,<br /><em>Responsibly</em><br />Delivered.</h1>
          <p>Wholesale packaging and paper solutions dispatched daily across South Florida.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">Check Inventory</a>
            <a className="btn secondary" href="tel:7547011797">Call Warehouse</a>
          </div>
        </div>
        <div className="warehouse-card">
          <img src="https://woodyspaper.com/image_ba5a41.jpg" alt="Woody's Paper distribution center warehouse" />
          <div className="warehouse-badge"><b>Warehouse Direct</b><span>Optimized Fulfillment</span></div>
        </div>
      </div>
    </section>
  )
}
