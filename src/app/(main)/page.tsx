// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
// import { products } from '@/lib/data/products';
// import { ProductGrid } from '@/components/Product-grid';
import { Button } from '@/components/ui/button';
import ProductList from '@/components/Product-list';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] rounded-lg overflow-hidden group">
        <Image
          src="/images/banner.jpg"
          alt="Moda y tecnología a un click"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center items-start p-8 lg:p-16 space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl">
            Descubre el futuro de <span className="text-secondary">TEX</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl">
            Colección exclusiva 2024 - Envío express en 24h 🚚
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105">
                Comprar Ahora
              </Button>
            </Link>
            <Link href="/sale">
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm text-white px-8 py-6 text-lg rounded-full border-white/20 hover:bg-white/20">
                Ofertas Flash
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Categorias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Ropa', 'Accesorios', 'Electrónicos', 'Novedades'].map((category, index) => (
            <Link
              key={category}
              href={`/products?category=${category}`}
              className="relative block h-64 rounded-xl overflow-hidden group transition-transform hover:-translate-y-2"
            >
              <Image
                src={`/images/category/${category.toLowerCase()}.jpg`}
                alt={category}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xl tracking-wide">
                  {category}
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Beneficios Premium*/}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container px-4 mx-auto">
          {/* <h2 className="text-3xl font-bold mb-12 text-center">Ventajas TEX</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: '/images/icon/free-shipping.png',
                title: 'Envío Relámpago',
                text: 'Recibe tu pedido en menos de 48h'
              },
              {
                icon: '/images/icon/24-7-support.png',
                title: 'Compra Segura',
                text: 'Protegemos tus datos 24/7'
              },
              {
                icon: '/images/icon/discount.png',
                title: 'Club de Beneficios',
                text: 'Descuentos exclusivos cada mes'
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-primary/10 w-fit p-4 rounded-xl mb-4">
                  <Image 
                    src={benefit.icon}
                    alt={benefit.title}
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados - Versión Mejorada */}
      <section className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Lo Más Vendido</h2>
          <Link href="/products" className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2">
            Ver Colección Completa
            <span className="text-lg">→</span>
          </Link>
        </div>
        <ProductList />
        {/* <ProductGrid products={products.slice(0, 8)} /> */}
      </section>

      {/* Banner de Oferta - Nuevo Componente */}
      <section className="bg-primary/90 text-white py-12">
        <div className="container px-4 mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">Black Friday Anticipado</h3>
          <p className="text-xl mb-6">Hasta 70% de descuento en seleccionados</p>
          <div className="flex justify-center gap-4">
            <Link href="/sale">
              <Button variant="secondary" className="px-8 py-6 text-lg rounded-full">
                Ver Ofertas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}