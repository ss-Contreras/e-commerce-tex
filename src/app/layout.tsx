import './globals.css';
import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
// import { Providers } from './providers';
import { ClientLayoutWrapper } from '@/components/Client-layout-wrapper';

export const metadata = {
  title: 'Mi E-Commerce',
  description: 'Tienda en línea con Next.js, Tailwind y shadcn/ui',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-900">
        {/* <Providers> */}
          <Header />
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
          <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
