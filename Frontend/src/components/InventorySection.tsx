import { inventory } from '../data/inventory'

export function InventorySection() {
  return (
    <section className="inventory section" id="products">
      <div className="wrap">
        <div className="section-title"><h2>Inventory Hub</h2><i /></div>
        <div className="inventory-grid">
          {inventory.map((item) => (
            <article className="inventory-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
