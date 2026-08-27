import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Viraj Steel | Premium Steel Furniture',
  description: 'Premium steel furniture designed for modern Indian homes and offices.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}