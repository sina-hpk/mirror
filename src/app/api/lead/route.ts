import { NextResponse } from 'next/server'
import { z } from 'zod'

const leadSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^(\+98|0)?9\d{9}$/),
  email: z.string().email().optional().or(z.literal('')),
  projectType: z.enum(['residential', 'commercial', 'automotive', 'healthcare', 'retail', 'other']),
  area: z.string().max(50).optional(),
  message: z.string().min(20).max(1000),
  consent: z.literal(true),
  sampleKit: z.boolean().default(false),
})

const WEBHOOK_URL = process.env.LEADS_WEBHOOK_URL
const NOTIFY_EMAIL = process.env.LEADS_NOTIFY_EMAIL

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'validation_failed', issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const lead = {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
    source: 'website',
  }

  // Send to external webhook (e.g. CRM / Slack / email automation) when configured
  if (WEBHOOK_URL) {
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      })
    } catch (err) {
      console.error('[lead] webhook delivery failed:', err)
    }
  }

  if (NOTIFY_EMAIL) {
    console.log(`[lead] new lead for ${NOTIFY_EMAIL}: ${lead.name} <${lead.phone}> [${lead.projectType}]`)
  }

  return NextResponse.json({ ok: true })
}
