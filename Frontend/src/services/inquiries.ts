export type Inquiry = {
  company: string
  email: string
  details: string
}

export const INQUIRY_ADDRESS = 'info@woodyspaper.com'

/** Subject headers must stay on one line. */
const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim()

/** Builds the mailto: URL for an inquiry. Exported so it can be unit tested. */
export function buildInquiryMailto(inquiry: Inquiry): string {
  const company = oneLine(inquiry.company) || 'Website visitor'
  const subject = `Supply inquiry — ${company}`

  const body = [
    `Business: ${company}`,
    `Contact email: ${oneLine(inquiry.email)}`,
    '',
    'Product list / requirements:',
    inquiry.details.trim() || '(none provided)',
    '',
    '— Sent from woodyspaper.com',
  ].join('\n')

  return `mailto:${INQUIRY_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/**
 * Hands the inquiry to the visitor's own email client, pre-filled.
 *
 * Nothing is stored or transmitted by the site itself — the visitor still has
 * to press send. Returns the mailto URL so the UI can offer it as a link if
 * the handoff silently fails (common on desktops with no mail client set up).
 *
 * When a real backend exists, replace the body with a POST to it and keep the
 * signature; the form only needs the promise to resolve or reject.
 */
export async function submitInquiry(inquiry: Inquiry): Promise<string> {
  const href = buildInquiryMailto(inquiry)
  window.location.href = href
  return href
}
