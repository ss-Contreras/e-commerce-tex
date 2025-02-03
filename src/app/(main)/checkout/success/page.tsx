// src/app/checkout/success/page.tsx
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <div className="container px-4 mx-auto py-20 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto" />
        <h1 className="text-4xl font-bold">¡Pedido Confirmado!</h1>
        <p className="text-xl text-gray-600">
          Tu pedido #TEX-12345 ha sido procesado exitosamente
        </p>

        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src="/images/order-confirmed.jpg"
            alt="Order confirmed"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">
            Hemos enviado los detalles a tu correo electrónico: user@example.com
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/orders/12345">Ver Detalles</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Seguir Comprando</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}