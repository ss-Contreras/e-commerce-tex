// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data/products';
import { ProductGrid } from '@/components/Product-grid';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image
          src="/images/hero-banner.jpg"
          alt="Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-8">
          <h1 className="text-3xl font-bold text-white">Bienvenido a TEX</h1>
          <p className="text-white mt-2">Encuentra los mejores productos en un solo lugar</p>
          <Link href="/products">
            <Button className="mt-4 bg-white text-black">Ver Productos</Button>
          </Link>
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Explora por Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link href="/products?category=Ropa" className="relative block h-40 rounded-md overflow-hidden group">
            <Image src="/images/category/clothing.jpg" alt="Ropa" fill className="object-cover group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Ropa</span>
            </div>
          </Link>
          <Link href="/products?category=Accesorios" className="relative block h-40 rounded-md overflow-hidden group">
            <Image src="/images/category/accessories.jpg" alt="Accesorios" fill className="object-cover group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Accesorios</span>
            </div>
          </Link>
          <Link href="/products?category=Electrónicos" className="relative block h-40 rounded-md overflow-hidden group">
            <Image src="/images/category/electronics.jpg" alt="Electrónicos" fill className="object-cover group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Electrónicos</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Beneficios adicionales */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Nuestros Beneficios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-md">
            <Image src="/images/icon/free-shipping.png" alt="Envío Gratis" width={60} height={60} className="mb-4" />
            <h3 className="font-semibold">Envío Gratis</h3>
            <p className="text-gray-600">Envía tus productos sin costo adicional.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-md">
            <Image src="/images/icon/24-7-support.png" alt="Soporte 24/7" width={60} height={60} className="mb-4"/>
            <h3 className="font-semibold">Soporte 24/7</h3>
            <p className="text-gray-600">Atención al cliente día y noche.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-md">
            <Image src="/images/icon/easy-returns.png" alt="Devoluciones Fáciles" width={60} height={60} className="mb-4"/>
            <h3 className="font-semibold">Devoluciones Fáciles</h3>
            <p className="text-gray-600">Proceso de devolución sencillo y sin complicaciones.</p>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Destacados</h2>
        <ProductGrid products={products.slice(0, 36)} />
        <div className="text-center mt-6">
          <Link href="/products">
            <Button variant="outline">Ver Todos</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
