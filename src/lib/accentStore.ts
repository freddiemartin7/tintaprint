export const ACCENT_COLORS = [
  '#ffffff', // brand green
  '#00e5ff', // cyan
  '#7c3aed', // purple
  '#ec4899', // pink
  '#00ff9d', // neon mint
  '#ff2d2d', // red
  '#1a3aff', // dark blue
]

export const AI_GREEN = '#ffffff'

const SESSION_KEY = 'tinta-accent'

let _accent = ACCENT_COLORS[0]
const _listeners: Array<(color: string) => void> = []

export function getAccent() { return _accent }

export function setAccent(color: string) {
  _accent = color
  if (typeof window !== 'undefined') {
    document.documentElement.style.setProperty('--accent', color)
    document.documentElement.style.setProperty('--accent-dim', color + '22')
    document.documentElement.style.setProperty('--accent-mid', color + '55')
    sessionStorage.setItem(SESSION_KEY, color)
  }
  _listeners.forEach(fn => fn(color))
}

export function onAccentChange(fn: (color: string) => void) {
  _listeners.push(fn)
  return () => {
    const i = _listeners.indexOf(fn)
    if (i > -1) _listeners.splice(i, 1)
  }
}

export function initAccent() {
  if (typeof window === 'undefined') return
  const stored = sessionStorage.getItem(SESSION_KEY)
  const color = stored ?? ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)]
  document.documentElement.style.setProperty('--accent', color)
  _accent = color
  if (!stored) sessionStorage.setItem(SESSION_KEY, color)
  _listeners.forEach(fn => fn(color))
}
