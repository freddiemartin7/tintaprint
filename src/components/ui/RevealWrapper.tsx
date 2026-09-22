'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RevealWrapperProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'wide' | 'left' | 'right'
  className?: string
  style?: React.CSSProperties
}

const variants = {
  wide: {
    hidden: { opacity: 0, scaleX: 1.15, filter: 'blur(6px)' },
    visible: { opacity: 1, scaleX: 1, filter: 'blur(0px)' },
  },
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
}

export default function RevealWrapper({
  children,
  delay = 0,
  direction = 'wide',
  className,
  style,
}: RevealWrapperProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  )
}
