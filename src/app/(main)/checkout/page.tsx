// src/app/checkout/page.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { mockCartItems } from '@/lib/data/cart';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';

type Step = 'shipping' | 'payment' | 'review';

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<Step>('shipping');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const subtotal = mockCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 15.00;
  const total = subtotal + shipping;

  const ShippingForm = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Datos de envío</h3>
      <div className="grid grid-cols-2 gap-4">
        <Input placeholder="Nombre" />
        <Input placeholder="Apellido" />
        <Input placeholder="Dirección" className="col-span-2" />
        <Input placeholder="Ciudad" />
        <Input placeholder="Código Postal" />
        <Input placeholder="Teléfono" className="col-span-2" />
      </div>
    </div>
  );

  const PaymentForm = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Método de pago</h3>
      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="credit-card" id="credit-card" />
          <Label htmlFor="credit-card">Tarjeta de crédito/débito</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paypal" id="paypal" />
          <Label htmlFor="paypal">PayPal</Label>
        </div>
      </RadioGroup>

      {paymentMethod === 'credit-card' && (
        <div className="space-y-4">
          <Input placeholder="Número de tarjeta" />
          <div className="grid grid-cols-3 gap-4">
            <Input placeholder="MM/AA" />
            <Input placeholder="CVC" />
            <Input placeholder="Nombre en tarjeta" className="col-span-2" />
          </div>
        </div>
      )}
    </div>
  );

  const ReviewOrder = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Revisar pedido</h3>
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-4">Dirección de envío</h4>
          <p>John Doe</p>
          <p>Av. Principal 123</p>
          <p>Bogotá, Colombia</p>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-4">Método de pago</h4>
          <p>Tarjeta de crédito terminada en 4242</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container px-4 mx-auto py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Proceso de Checkout */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <div className={`step ${currentStep === 'shipping' ? 'active' : ''}`}>
              <div className="h-2 w-24 bg-primary rounded-full"></div>
              <span>Envío</span>
            </div>
            <div className={`step ${currentStep === 'payment' ? 'active' : ''}`}>
              <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
              <span>Pago</span>
            </div>
            <div className={`step ${currentStep === 'review' ? 'active' : ''}`}>
              <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
              <span>Revisión</span>
            </div>
          </div>

          {currentStep === 'shipping' && <ShippingForm />}
          {currentStep === 'payment' && <PaymentForm />}
          {currentStep === 'review' && <ReviewOrder />}

          <div className="flex justify-between">
            {currentStep !== 'shipping' && (
              <Button variant="outline" onClick={() => setCurrentStep('shipping')}>
                Regresar
              </Button>
            )}
            <Button
              className="ml-auto"
              onClick={() => {
                if (currentStep === 'shipping') setCurrentStep('payment');
                if (currentStep === 'payment') setCurrentStep('review');
                if (currentStep === 'review') window.location.href = '/checkout/success';
              }}
            >
              {currentStep === 'review' ? 'Confirmar Pedido' : 'Continuar'}
            </Button>
          </div>
        </div>

        {/* Resumen del Pedido */}
        <div className="bg-gray-50 p-6 rounded-xl h-fit sticky top-8">
          <h2 className="text-2xl font-bold mb-6">Tu Pedido</h2>
          
          <div className="space-y-6">
            {mockCartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative w-20 h-20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}