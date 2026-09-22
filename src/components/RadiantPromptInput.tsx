'use client'
import { useState, useRef } from 'react'
import { Plus, Mic, ArrowUp } from 'lucide-react'

export interface RadiantPromptInputProps {
  placeholder?: string
  onSubmit?: (value: string) => void
  size?: 'default' | 'small'
}

export default function RadiantPromptInput({
  placeholder = 'Ask anything about print...',
  onSubmit,
  size = 'default',
}: RadiantPromptInputProps) {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const hasValue = value.trim().length > 0

  const handleSubmit = () => {
    if (!hasValue) return
    onSubmit?.(value.trim())
    setValue('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="radiant-wrapper">
      <div className="radiant-border-ring" aria-hidden="true" />
      <div className={`radiant-inner${size === 'small' ? ' radiant-small' : ''}`}>
        <button
          type="button"
          aria-label="Add attachment"
          style={{
            color: 'rgba(255,255,255,0.4)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <Plus size={size === 'small' ? 15 : 17} />
        </button>

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`radiant-input-field${size === 'small' ? ' small' : ''}`}
        />

        <button
          type="button"
          aria-label="Voice input"
          style={{
            color: 'rgba(255,255,255,0.4)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <Mic size={size === 'small' ? 15 : 17} />
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!hasValue}
          aria-label="Submit"
          style={{
            background: hasValue ? '#ffffff' : 'rgba(255,255,255,0.08)',
            border: 'none',
            borderRadius: '50%',
            width: size === 'small' ? 28 : 32,
            height: size === 'small' ? 28 : 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: hasValue ? 'pointer' : 'not-allowed',
            flexShrink: 0,
            color: hasValue ? '#000000' : 'rgba(255,255,255,0.25)',
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          <ArrowUp size={size === 'small' ? 13 : 15} />
        </button>
      </div>
    </div>
  )
}
