// src/app/cart/page.tsx
import { Button } from '@/components/ui/button';

export default function CartPage() {
  // Datos quemados de ejemplo
  const cartItems = [
    { id: '1', title: 'Camiseta React', price: 25.99, quantity: 2 },
    { id: '2', title: 'Gorra Next.js', price: 19.99, quantity: 1 },
  ];

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Carrito</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
              </div>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="flex justify-between items-center font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Button className="w-full mt-4">Proceder al Pago</Button>
        </div>
      )}
    </div>
  );
}
