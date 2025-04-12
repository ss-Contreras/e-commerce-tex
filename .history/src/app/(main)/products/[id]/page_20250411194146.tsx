// src/app/products/[id]/page.tsx
'use client'

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data/products';
import { Button } from '@/components/ui/button';

interface ProductDetailPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="relative w-full md:w-1/2 h-96">
        <Image
          src={product!.image}
          alt={product!.title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-2">{product!.title}</h1>
        <p className="text-gray-700">{product!.description}</p>
        <p className="font-bold text-2xl mt-4">${product!.price.toFixed(2)}</p>
        <Button className="mt-4">Añadir al Carrito</Button>
      </div>
    </div>
  );
}
