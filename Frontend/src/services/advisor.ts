import { findMatches } from '../data/catalog'
import type { CatalogItem } from '../data/catalog'
import { inventory } from '../data/inventory'

export type AdvisorResult = {
  /** One-paragraph read on what the customer asked for. */
  summary: string
  /** Storage / delivery note for South Florida. */
  logistics: string
  matches: CatalogItem[]
}

/**
 * ---------------------------------------------------------------------------
 * STUB. Runs entirely in the browser against the local catalog so the UI is
 * fully exercisable without credentials.
 *
 * To go live, replace the body with a call to your own endpoint — keep the
 * signature and the AdvisorResult shape and no component needs to change:
 *
 *   const response = await fetch('/api/advisor', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ question }),
 *   })
 *   return (await response.json()) as AdvisorResult
 *
 * Call the model from that endpoint, never from here — a key shipped to the
 * browser is a public key.
 * ---------------------------------------------------------------------------
 */
export async function askWoody(question: string): Promise<AdvisorResult> {
  await delay(650)

  const asked = question.toLowerCase()
  const category = inventory.find((entry) =>
    entry.keywords.some((keyword) => asked.includes(keyword)),
  )

  const terms = asked.split(/[^a-z0-9]+/).filter(Boolean)
  const matches = findMatches(category ? [...category.keywords, ...terms] : terms)

  const summary = matches.length
    ? `Based on your requirement we have cross-referenced ${matches.length} wholesale ${
        matches.length === 1 ? 'SKU' : 'SKUs'
      }${category ? ` in ${category.title}` : ''}. Listings and pricing are indicative and subject to confirmation against live warehouse stock.`
    : 'No direct SKU match was returned for that description. Submit a supply inquiry below and our team will source it against current warehouse and vendor availability.'

  const logistics = category
    ? `${category.title} moves on our daily South Florida dispatch. Given regional humidity, store pallets off the slab and shrink-wrapped; we can stage split deliveries if you are short on dry storage.`
    : 'We dispatch across South Florida daily. Tell us your delivery window and dock constraints and we will schedule against the nearest route.'

  return { summary, logistics, matches }
}

/**
 * STUB. Tidies a pasted product list into a structured inquiry. Swap for a
 * server-side model call the same way as askWoody.
 */
export async function refineInquiry(details: string): Promise<string> {
  await delay(500)

  const lines = details
    .split(/[\n;]+/)
    .map((line) => line.trim().replace(/^[-*•]\s*/, ''))
    .filter(Boolean)

  if (lines.length === 0) return details

  return ['Wholesale supply request:', ...lines.map((line, index) => `${index + 1}. ${line}`), '', 'Please confirm case quantities, current pricing and the earliest delivery window.'].join('\n')
}

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))
