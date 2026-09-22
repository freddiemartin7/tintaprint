'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function ImageReveal({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80, rotateY: 8 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}
