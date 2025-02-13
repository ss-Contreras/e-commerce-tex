// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { inter } from '@/config/fonts';
import store from './store/store';
import { Provider } from 'react-redux'
// import { ClientLayoutWrapper } from '@/components/Client-layout-wrapper';
// import { GlobalStateProvider } from '@/store/globalState';

export const metadata = {
  title: 'Mi E-Commerce',
  description: 'Tienda en línea con Next.js, Tailwind y shadcn/ui',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {/* <GlobalStateProvider> */}
        <Provider store={store}>
          {children}
        </Provider>
        {/* </GlobalStateProvider> */}
      </body>
    </html>
  );
}
