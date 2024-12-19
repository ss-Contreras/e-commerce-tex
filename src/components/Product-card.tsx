import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image 
            src={product.image} 
            alt={product.title} 
            fill 
            className="object-cover rounded-t-md"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg truncate">{product.title}</h3>
        <p className="text-sm text-gray-600 truncate">{product.description}</p>
        <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-2 flex justify-between">
        <Link href={`/products/${product.id}`}>
          <Button variant="outline">Ver</Button>
        </Link>
        <Button>Añadir al Carrito</Button>
      </CardFooter>
    </Card>
  );
}
