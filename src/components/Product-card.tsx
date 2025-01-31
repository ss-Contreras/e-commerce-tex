import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

// Actualización en Product-card.tsx
export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 group overflow-hidden">
      <CardHeader className="p-0 relative">
        <div className="relative w-full h-48 overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.title} 
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* {product.isNew && (
            <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
              NUEVO
            </div>
          )} */}
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg truncate">{product.title}</h3>
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            {/* <span>{product.rating}</span> */}
          </div>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-3 mt-2">
          <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
          {/* {product.oldPrice && (
            <p className="text-gray-400 line-through">${product.oldPrice.toFixed(2)}</p>
          )} */}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link href={`/products/${product.id}`}>
          <Button variant="outline" className="rounded-full">
            Ver Detalles
          </Button>
        </Link>
        <Button className="rounded-full gap-2">
          <ShoppingCart className="w-4 h-4" />
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}