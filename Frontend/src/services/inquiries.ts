export type Inquiry = {
  company: string
  email: string
  details: string
}

/**
 * STUB. Accepts the inquiry and resolves. Point this at your own endpoint (or
 * a Firestore write) when the backend is ready — the form only needs the
 * promise to resolve or reject.
 */
export async function submitInquiry(inquiry: Inquiry): Promise<void> {
  await new Promise<void>((resolve) => setTimeout(resolve, 700))

  if (import.meta.env.DEV) {
    console.info('[inquiry] captured', inquiry)
  }
}
