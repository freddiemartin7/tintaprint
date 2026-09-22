'use client';
import Link from 'next/link';
import RadiantPromptInput from '@/components/RadiantPromptInput';

export default function Hero() {
  const handleAISubmit = (value: string) => {
    window.dispatchEvent(new CustomEvent('openTintaAI', { detail: { message: value } }));
  };

  return (
    <section style={{
      minHeight: '100vh',
      background: '#000000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
    }}>

      <div style={{
        marginBottom: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}>
        <div style={{
          width: '80px',
          height: '96px',
          background: 'transparent',
          border: '2px solid rgba(255,255,255,0.15)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: 'Switzer, sans-serif',
            fontSize: '36px',
            fontWeight: 700,
            color: '#ffffff',
          }}>t</span>
        </div>

        <div style={{
          fontFamily: 'Aeonik Pro, sans-serif',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}>
          <span style={{ color: '#ffffff' }}>TINTA </span>
          <span style={{ color: '#ffffff' }}>PRINT</span>
        </div>
      </div>

      <p style={{
        fontFamily: 'Switzer, sans-serif',
        fontWeight: 300,
        fontSize: 'clamp(16px, 2vw, 20px)',
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'center',
        maxWidth: '480px',
        lineHeight: 1.6,
        marginBottom: '48px',
      }}>
        AI-powered print, delivered to your door.
      </p>

      <div style={{
        width: '100%',
        maxWidth: '560px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}>
        <span style={{
          fontFamily: 'Switzer, sans-serif',
          fontSize: '11px',
          fontWeight: 400,
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          Ask our AI anything — specs, turnaround, products
        </span>
        <RadiantPromptInput
          onSubmit={handleAISubmit}
          placeholder="e.g. What paper stock for business cards?"
        />
      </div>

      <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: '40px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <Link href="/contact" style={{
          background: '#ffffff',
          color: '#000000',
          fontFamily: 'Switzer, sans-serif',
          fontWeight: 600,
          fontSize: '14px',
          padding: '12px 28px',
          borderRadius: '9999px',
          textDecoration: 'none',
          transition: 'opacity 0.2s ease',
        }}>
          Get a Quote
        </Link>
        <Link href="/products" style={{
          background: 'transparent',
          color: '#ffffff',
          fontFamily: 'Switzer, sans-serif',
          fontWeight: 400,
          fontSize: '14px',
          padding: '12px 28px',
          borderRadius: '9999px',
          textDecoration: 'none',
          border: '1px solid rgba(255,255,255,0.2)',
          transition: 'border-color 0.2s ease',
        }}>
          View Products
        </Link>
      </div>
    </section>
  );
}
