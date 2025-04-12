// src/app/products/page.tsx
'use client'

import { products } from '@/lib/data/products';
import { ProductGrid } from '@/components/Product-grid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="container px-4 mx-auto space-y-12">
      {/* Header con Buscador */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Tienda TEX</h1>
            <p className="text-gray-600">Mostrando {products.length} productos</p>
          </div>
          <div className="w-full md:w-96">
            <Input
              placeholder="Buscar productos..."
              className="rounded-full px-6 py-6"
            />
          </div>
        </div>

        {/* Filtros Rápidos */}
        <div className="flex flex-wrap gap-3">
          {['Ofertas', 'Nuevos', 'Mejor Valorados', 'Últimas Unidades'].map((tag) => (
            <Button
              key={tag}
              variant="outline"
              className="rounded-full px-6 border-gray-200"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* Layout con Sidebar y Productos */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar de Filtros */}
        <aside className="lg:w-80 space-y-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold mb-4">Categorías</h3>
            <div className="space-y-3">
              {['Ropa', 'Accesorios', 'Electrónicos', 'Hogar'].map((category) => (
                <Link
                  key={category}
                  href={`/category?category=${category.toLowerCase()}`}
                  className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg"
                >
                  <span>{category}</span>
                  <span className="text-gray-500">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold mb-4">Rango de Precio</h3>
            <div className="space-y-4">
              <input type="range" min="0" max="1000" className="w-full" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Grid de Productos */}
        {/* <main className="flex-1">
          <ProductGrid products={products} />
        </main> */}
      </div>
    </div>
  );
}