import './globals.css';
import type { Metadata } from 'next';
import { MainNav } from '@/components/MainNav';

export const metadata: Metadata = {
  title: 'SpiritOS',
  description:
    'SpiritOS is a comparative sacred-text research platform. Scripture Atlas is its first module for mapping shared Abrahamic narratives with interpretive transparency.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
