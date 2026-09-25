import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { captchaToken, ...formData } = body

  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${captchaToken}`,
  })
  const verify = await verifyRes.json()

  if (!verify.success) {
    return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 })
  }

  const res = await fetch('https://formspree.io/f/mnjevgqq', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...formData,
      _subject: `Contact — ${formData.enquiry || 'New Enquiry'}`,
    }),
  })

  return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 500 })
}
