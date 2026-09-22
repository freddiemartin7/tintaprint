'use client';
import { useEffect } from 'react';
import { initAccent } from '@/lib/accentStore';

export default function AccentInit() {
  useEffect(() => {
    initAccent();
  }, []);
  return null;
}
