import { products } from '@/lib/data/products';
import { ProductGrid } from '@/components/Product-grid';

export default function ProductsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Todos los Productos</h1>
      <ProductGrid products={products} />
    </div>
  );
}
