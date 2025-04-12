import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductList from '@/components/Product-list';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] rounded-lg overflow-hidden group">
        <Image
          src="/images/banner.jpg"
          alt="Moda y tecnología a un click"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center items-start p-4 sm:p-8 lg:p-16 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl">
            Descubre el futuro de <span className="text-secondary">TEX</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl">
            Colección exclusiva 2024 - Envío express en 24h 🚚
          </p>
          <div className="flex gap-4 mt-4 sm:mt-6">
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg transition-all hover:scale-105">
                Comprar Ahora
              </Button>
            </Link>
            <Link href="/sale">
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full border-white/20 hover:bg-white/20">
                Ofertas Flash
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section className="container px-4 mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Ropa', 'Accesorios', 'Electrónicos', 'Novedades'].map((category) => (
            <Link
              key={category}
              href={`/products?category=${category}`}
              className="relative block h-48 sm:h-64 rounded-xl overflow-hidden group transition-transform hover:-translate-y-2"
            >
              <Image
                src={`/images/category/${category.toLowerCase()}.jpg`}
                alt={category}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6">
                <span className="text-white font-bold text-lg sm:text-xl tracking-wide">
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

      {/* Beneficios Premium */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-8 sm:py-12">
        <div className="container px-4 mx-auto">
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
            ].map((benefit) => (
              <div 
                key={benefit.title}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-primary/10 w-fit p-3 sm:p-4 rounded-xl mb-4">
                  <Image 
                    src={benefit.icon}
                    alt={benefit.title}
                    width={40}
                    height={40}
                    className="h-8 w-8 sm:h-10 sm:w-10"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="container px-4 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Lo Más Vendido</h2>
          <Link href="/products" className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 mt-4 sm:mt-0">
            Ver Colección Completa
            <span className="text-lg">→</span>
          </Link>
        </div>
        <ProductList />
      </section>

      {/* Banner de Oferta */}
      <section className="bg-primary/90 text-white py-8 sm:py-12">
        <div className="container px-4 mx-auto text-center">
          <h3 className="text-2xl sm:text-4xl font-bold mb-4">Black Friday Anticipado</h3>
          <p className="text-base sm:text-xl mb-6">Hasta 70% de descuento en seleccionados</p>
          <div className="flex justify-center gap-4">
            <Link href="/sale">
              <Button variant="secondary" className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full">
                Ver Ofertas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
