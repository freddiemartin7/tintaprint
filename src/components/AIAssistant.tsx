'use client'
import { useState, useRef, useEffect } from 'react'
import { X } from 'lucide-react'
import RadiantPromptInput from './RadiantPromptInput'

const D = '"Aeonik Pro", sans-serif'
const B = '"Switzer", sans-serif'
const A = '"Arya", sans-serif'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const decisionTree: { pattern: RegExp; response: string }[] = [
  {
    pattern: /turnaround|how long|delivery time/i,
    response:
      'Standard turnaround is 3–5 working days from artwork approval. Express options are available on selected products — contact us for urgent requests.',
  },
  {
    pattern: /file format|what format|bleed/i,
    response:
      'We prefer PDF files set up in CMYK at 300dpi with 3mm bleed on all sides. Feel free to contact us if you have any questions about your files.',
  },
  {
    pattern: /design|artwork|can you design/i,
    response:
      "Yes — we offer a Design & Artwork service. Get in touch via our quote form and we'll provide a quote based on your brief.",
  },
  {
    pattern: /price|how much|cost|quote/i,
    response:
      "Pricing depends on your specification and quantities. Use our Get a Quote form and we'll come back to you quickly — or head to Quick Buy for standard products.",
  },
  {
    pattern: /same day|urgent|express/i,
    response:
      'For urgent jobs please contact us directly. Same day is available on selected products subject to artwork approval before midday.',
  },
  {
    pattern: /damaged|wrong|problem|complaint/i,
    response:
      "We're sorry to hear that. Please contact us within 48 hours of receiving your order with photos and we'll resolve it promptly.",
  },
  {
    pattern: /where are you|location|address/i,
    response:
      "We're a UK-based print company serving customers nationwide with tracked delivery to your door.",
  },
]

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm the Tinta Print AI assistant. How can I help you today?",
    },
  ])
  const [loading, setLoading] = useState(false)
  const [pendingQuery, setPendingQuery] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, open])

  useEffect(() => {
    const handler = (e: Event) => {
      const msg = (e as CustomEvent<{ message: string }>).detail.message
      setOpen(true)
      setPendingQuery(msg)
    }
    window.addEventListener('openTintaAI', handler)
    return () => window.removeEventListener('openTintaAI', handler)
  }, [])

  useEffect(() => {
    if (pendingQuery !== null && open) {
      const q = pendingQuery
      setPendingQuery(null)
      handleSubmit(q)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingQuery, open])

  const handleSubmit = async (value: string) => {
    const userMsg: Message = { role: 'user', content: value }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)

    for (const entry of decisionTree) {
      if (entry.pattern.test(value)) {
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            { role: 'assistant', content: entry.response },
          ])
          setLoading(false)
        }, 420)
        return
      }
    }

    try {
      const allMessages = [...messages, userMsg].map(m => ({
        role: m.role,
        content: m.content,
      }))
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: allMessages }),
      })
      const data = await res.json()
      const text =
        data.content?.[0]?.text ??
        "Sorry, I couldn't get a response. Please try again."
      setMessages(prev => [...prev, { role: 'assistant', content: text }])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Sorry, something went wrong. Please try again or get in touch directly.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 9999 }}>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Tinta AI assistant"
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            <circle cx="13" cy="9" r="5" stroke="#000000" strokeWidth="1.5" />
            <circle cx="11" cy="8" r="0.9" fill="#000000" />
            <circle cx="15" cy="8" r="0.9" fill="#000000" />
            <circle cx="13" cy="10.5" r="1" fill="#000000" />
            <path d="M7 15h12v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-5z" stroke="#000000" strokeWidth="1.5" />
            <path d="M5 17.5h2M19 17.5h2" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      ) : (
        <div
          className="ai-panel"
          style={{
            width: 380,
            maxWidth: 'calc(100vw - 2rem)',
            height: 520,
            maxHeight: 'calc(100vh - 5rem)',
            background: '#0a0a0a',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 16,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.03)',
          }}
        >
          <style>{`.ai-panel .radiant-input-field,.ai-panel .radiant-input-field::placeholder{font-family:'Arya',sans-serif;}`}</style>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.25rem',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span style={{ fontFamily: A, fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                Tinta AI
              </span>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 0 6px rgba(255,255,255,0.6)',
                }}
              />
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.4)',
                display: 'flex',
                padding: '0.25rem',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '82%',
                    background: msg.role === 'user' ? '#ffffff' : '#1a1a1a',
                    color: msg.role === 'user' ? '#000000' : 'rgba(255,255,255,0.85)',
                    borderRadius:
                      msg.role === 'user'
                        ? '16px 16px 4px 16px'
                        : '16px 16px 16px 4px',
                    padding: '0.625rem 0.875rem',
                    fontFamily: A,
                    fontSize: '0.875rem',
                    lineHeight: 1.55,
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    background: '#1a1a1a',
                    borderRadius: '16px 16px 16px 4px',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    gap: '0.3rem',
                    alignItems: 'center',
                  }}
                >
                  {[0, 1, 2].map(i => (
                    <span
                      key={i}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#ffffff',
                        display: 'inline-block',
                        animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '0.75rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              flexShrink: 0,
            }}
          >
            <RadiantPromptInput
              placeholder="Ask anything about print..."
              onSubmit={handleSubmit}
              size="small"
            />
          </div>
        </div>
      )}
    </div>
  )
}
