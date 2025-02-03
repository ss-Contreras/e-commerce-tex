// src/components/cart-sheet.tsx
'use client';

import { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export function CartSheet() {
  const [open, setOpen] = useState(false);
  
  // Datos quemados de ejemplo en el carrito
  const cartItems = [
    { id: '1', title: 'Camiseta React', price: 25.99, quantity: 2 },
    { id: '2', title: 'Gorra Next.js', price: 19.99, quantity: 1 },
  ];

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <ShoppingCart className="h-5 w-5" />
          <span>Cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle>Carrito</SheetTitle>
          <SheetDescription>
            Tus productos seleccionados
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-4 space-y-4">
          {cartItems.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                </div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))
          )}
          {cartItems.length > 0 && (
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          )}
          {cartItems.length > 0 && (
            <SheetClose asChild>
            <Link
              href='/cart'
            >
              <Button className="w-full mt-4">Proceder al Pago</Button>
            </Link>
            </SheetClose>
          )}
        </div>
        
        <SheetClose asChild>
          <Button variant="outline" className="mt-4 w-full">Cerrar</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
