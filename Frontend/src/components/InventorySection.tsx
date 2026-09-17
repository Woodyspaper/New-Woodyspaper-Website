import { inventory } from '../data/inventory'

export function InventorySection() {
  return (
    <section className="bg-[#fdfcf9] py-[76px]" id="products">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-[61px] text-center">
          <h2 className="m-0 text-[38px] font-bold leading-none text-[#101a2b]">Inventory Hub</h2>
          <i className="mx-auto mt-[17px] block h-[5px] w-[80px] rounded-[4px] bg-[#438341]" />
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {inventory.map((item) => (
            <article
              className="group min-h-[245px] rounded-[24px] border border-[#f0f1f3] bg-white p-[32px_22px_24px] text-center shadow-[0_14px_30px_rgba(35,50,45,0.06)] transition duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_38px_rgba(35,50,45,0.11)]"
              key={item.title}
            >
              <div className="mx-auto mb-[21px] grid h-[58px] w-[58px] place-items-center rounded-[16px] bg-[#eef7ee] text-[30px] text-[#438341]">
                ▣
              </div>
              <h3 className="mb-[8px] text-[19px] font-bold text-[#3f803d]">{item.title}</h3>
              <p className="mb-[28px] text-[14px] text-[#617089]">{item.subtitle}</p>
              <b className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#6b778a]">
                Current Stock <span className="pl-[7px] text-[#438341]">→</span>
              </b>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
