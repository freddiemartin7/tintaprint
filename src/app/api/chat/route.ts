import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: `You are the Tinta Print AI assistant. Tinta Print is a UK-based AI-powered print company offering high quality print products including business cards, flyers, posters, banners, brochures, stickers, signs and boards, cards, letterheads, orders of service, event print and wedding print. You help customers choose the right products, understand specifications, and get quotes. Always be helpful, concise and professional. Never mention suppliers, third parties, or anything about how print is produced behind the scenes. If a customer asks for a quote, direct them to the Get a Quote page at /contact. If they want to order standard products quickly, direct them to /quick-buy. Do not make up prices — always say pricing is available on request or direct to the quote form.`,
      messages,
    }),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
