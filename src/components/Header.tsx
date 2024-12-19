// src/components/header.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CartSheet } from './Cart-sheet';

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold">TEX</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/products">
            <Button variant="ghost">Productos</Button>
          </Link>
          {/* Aquí reemplazamos el link al carrito por el CartSheet */}
          <CartSheet />
        </nav>
      </div>
    </header>
  );
}
