import type { Metadata } from "next";
import "./globals.css";
import AIAssistant from "@/components/AIAssistant";

export const metadata: Metadata = {
  title: "Tinta Print — Premium Print Service UK",
  description:
    "Whatever you need printed — Tinta Print delivers premium quality, fast turnaround, and zero hassle. Business cards, banners, brochures & more.",
  keywords: "print, business cards, banners, brochures, UK printing",
  icons: [
    { rel: 'icon', url: '/favicon-light.svg', media: '(prefers-color-scheme: light)' },
    { rel: 'icon', url: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pmz6frf.css" />
      </head>
      <body style={{ fontFamily: "'Switzer', sans-serif", background: '#000000', color: '#ffffff' }}>
        {children}
        <AIAssistant />
      </body>
    </html>
  );
}
