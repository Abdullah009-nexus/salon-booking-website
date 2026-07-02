import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Glamour Saloon — Men\'s Grooming · Bahria Town Phase 4, Rawalpindi',
  description:
    "Glamour Saloon is Bahria Town Phase 4's destination for precision haircuts, beard craft, keratin treatments and grooming packages, one studio, one exacting standard.",
  keywords: ['glamour saloon', 'men salon bahria town rawalpindi', 'haircut bahria town', 'beard trim rawalpindi', 'keratin rawalpindi'],
  openGraph: {
    title: 'Glamour Saloon — Men\'s Grooming · Bahria Town Phase 4',
    description: 'Precision haircuts, beard craft & grooming one exacting standard.',
    url: 'https://glamoursaloon.pk',
    siteName: 'Glamour Saloon',
    locale: 'en_PK',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#0c0c0c',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
