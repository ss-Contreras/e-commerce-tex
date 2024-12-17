import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

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
          <Link href="/cart">
            <Button variant="ghost">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
