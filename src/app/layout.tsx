import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Glamour Saloon | Bahria Town Phase 4',
  description: 'Premium men and ladies grooming salon in Bahria Town Phase 4, Rawalpindi. Book via WhatsApp.',
  metadataBase: new URL('https://glamour-saloon.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
