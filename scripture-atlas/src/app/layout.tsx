import './globals.css';
import type { Metadata } from 'next';
import { MainNav } from '@/components/MainNav';

export const metadata: Metadata = {
  title: 'Scripture Atlas',
  description: 'Comparative scripture interface for shared Abrahamic stories'
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
