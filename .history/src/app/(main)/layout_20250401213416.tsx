import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ClientLayoutWrapper } from '@/components/Client-layout-wrapper';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <ClientLayoutWrapper>
        <main className="flex-1 p-4 sm:p-8 overflow-auto">
          {children}
        </main>
      </ClientLayoutWrapper>
      <Footer />
    </>
  );
}
