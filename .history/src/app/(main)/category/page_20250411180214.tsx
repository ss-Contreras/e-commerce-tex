// src/app/category/page.tsx
'use server'

import { products } from '@/lib/data/products';
import { ProductGrid } from '@/components/Product-grid';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
// import { notFound } from 'next/navigation';

type Props = {
  searchParams: { category?: string };
};

const CategoryPage = ({ searchParams }: Props) => {
  // Validación de categoría
  if (!searchParams.category) {
    return (
      <div className="space-y-12">
        {/* Hero de Categoría */}
        <section className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
          <Image
            src={`/images/hero-banner.jpg`}
            alt='img'
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 lg:p-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white capitalize">
                {searchParams.category}
              </h1>
              <div className="flex gap-2 text-sm text-white/80">
                <Link href="/">Home</Link>
                <span>/</span>
                <span className="text-primary">{searchParams.category}</span>
              </div>
            </div>
          </div>
        </section>
  
        {/* Filtros y Ordenamiento */}
        <section className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="flex gap-4 items-center">
              <span className="font-semibold">Filtrar por:</span>
              <Button variant="outline" className="rounded-full">
                Precio
              </Button>
              <Button variant="outline" className="rounded-full">
                Talla
              </Button>
              <Button variant="outline" className="rounded-full">
                Rating
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="font-semibold">Ordenar:</span>
              <select className="bg-transparent border rounded-full px-4 py-2">
                <option>Más Relevantes</option>
                <option>Precio: Menor a Mayor</option>
                <option>Precio: Mayor a Menor</option>
              </select>
            </div>
          </div>
        </section>
  
        {/* Grid de Productos */}
        {/* <section className="container px-4 mx-auto">
          {categoryProducts.length > 0 ? (
            <ProductGrid products={categoryProducts} />
          ) : (
            <div className="text-center py-20 space-y-4">
              <h2 className="text-2xl font-bold">No hay productos en esta categoría</h2>
              <Link href="/products">
                <Button>Explorar Todos</Button>
              </Link>
            </div>
          )}
        </section> */}
      </div>
    );
  }

  const categoryName = searchParams.category.toLowerCase();
  const categoryProducts = products.filter(
    (p) => p.category?.toLowerCase() === categoryName
  );

  return (
    <div className="space-y-12">
      {/* Hero de Categoría */}
      <section className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
        <Image
          src={`/images/banners/${searchParams.category}-banner.jpg`}
          alt={searchParams.category}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 lg:p-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white capitalize">
              {searchParams.category}
            </h1>
            <div className="flex gap-2 text-sm text-white/80">
              <Link href="/">Home</Link>
              <span>/</span>
              <span className="text-primary">{searchParams.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros y Ordenamiento */}
      <section className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div className="flex gap-4 items-center">
            <span className="font-semibold">Filtrar por:</span>
            <Button variant="outline" className="rounded-full">
              Precio
            </Button>
            <Button variant="outline" className="rounded-full">
              Talla
            </Button>
            <Button variant="outline" className="rounded-full">
              Rating
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="font-semibold">Ordenar:</span>
            <select className="bg-transparent border rounded-full px-4 py-2">
              <option>Más Relevantes</option>
              <option>Precio: Menor a Mayor</option>
              <option>Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grid de Productos */}
      {/* <section className="container px-4 mx-auto">
        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} />
        ) : (
          <div className="text-center py-20 space-y-4">
            <h2 className="text-2xl font-bold">No hay productos en esta categoría</h2>
            <Link href="/products">
              <Button>Explorar Todos</Button>
            </Link>
          </div>
        )}
      </section> */}
    </div>
  );
};

export default CategoryPage;