// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data/products';
import { ProductGrid } from '@/components/Product-grid';

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image
          src="/images/hero-banner.jpg"
          alt="Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-8">
          <h1 className="text-3xl font-bold text-white">Bienvenido a Mi E-Commerce</h1>
          <p className="text-white mt-2">Encuentra los mejores productos en un solo lugar</p>
          <Link href="/products" className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-md font-medium">
            Ver Productos
          </Link>
        </div>
      </section>

      {/* Productos */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Productos</h2>
        <ProductGrid products={products.slice(0, 3)} />
      </section>
    </div>
  );
}
