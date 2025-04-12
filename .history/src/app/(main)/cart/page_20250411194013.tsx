// src/app/cart/page.tsx
'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { CheckBadgeIcon, TruckIcon } from '@heroicons/react/24/solid';

// Datos mockeados
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
}

const mockCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Camiseta Premium Algodón',
    price: 89.99,
    quantity: 2,
    image: '/images/react-tshirt.jpg',
    size: 'M',
    color: 'Negro'
  },
  {
    id: '2',
    name: 'Gorra Next',
    price: 149.99,
    quantity: 1,
    image: '/images/next-cap.jpg',
    size: '42'
  }
];

export default function CartPage() {
  const subtotal = mockCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 15.00;
  const total = subtotal + shipping;

  return (
    <div className="container px-4 mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Tu Carrito</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Lista de Productos */}
        <div className="lg:col-span-2 space-y-6">
          {mockCartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="relative w-full sm:w-40 h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    {item.size && <p className="text-gray-600">Talla: {item.size}</p>}
                    {item.color && <p className="text-gray-600">Color: {item.color}</p>}
                  </div>
                  <Button variant="ghost" size="icon">
                    <TrashIcon className="w-5 h-5 text-red-500" />
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 border rounded-full p-2">
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <MinusIcon className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <PlusIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-xl font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen del Pedido */}
        <div className="bg-gray-50 p-6 rounded-xl h-fit sticky top-8">
          <h2 className="text-2xl font-bold mb-6">Resumen</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Envío:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex gap-2">
                <Input placeholder="Código promocional" className="flex-1" />
                <Button variant="outline">Aplicar</Button>
              </div>

              <Button className="w-full py-6 text-lg">Pagar Ahora</Button>
              
              <div className="text-center text-sm text-gray-600 mt-4">
                <p className="flex items-center justify-center gap-2 mb-2">
                  <TruckIcon className="w-5 h-5 text-green-500" />
                  Envío gratis en órdenes mayores a $200
                </p>
                <p className="flex items-center justify-center gap-2">
                  <CheckBadgeIcon className="w-5 h-5 text-blue-500" />
                  Compra 100% segura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Productos Recomendados */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">También te puede interesar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Mock de productos relacionados */}
          {mockCartItems.slice(0, 2).map((item) => (
            <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold truncate">{item.name}</h3>
              <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}