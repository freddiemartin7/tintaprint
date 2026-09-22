import type { Metadata } from "next";
import "./globals.css";
import AIAssistant from "@/components/AIAssistant";
import AccentInit from "@/components/AccentInit";

export const metadata: Metadata = {
  title: "Tinta Print — AI-Powered Print Service UK",
  description:
    "Whatever you need printed — Tinta Print delivers premium quality, fast turnaround, and zero hassle. Business cards, banners, brochures & more.",
  keywords: "print, business cards, banners, brochures, UK printing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
(function() {
  try {
    var accent = sessionStorage.getItem('tinta-accent');
    var colors = ['#00c060','#00e5ff','#7c3aed','#ec4899','#00ff9d','#ff2d2d','#1a3aff'];
    if (!accent) {
      accent = colors[Math.floor(Math.random() * colors.length)];
      sessionStorage.setItem('tinta-accent', accent);
    }
    document.documentElement.style.setProperty('--accent', accent);
  } catch(e) {}
})();
        `}} />
      </head>
      <body className="font-sans bg-black text-white antialiased">
        <AccentInit />
        {children}
        <AIAssistant />
      </body>
    </html>
  );
}
