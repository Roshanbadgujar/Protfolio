import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Roshan Badgujar | Full Stack Developer',
  description: 'Portfolio of Roshan Badgujar — Full Stack Developer & AI Engineer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
