'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CartSheet } from './Cart-sheet';
import UserAccount from './User-account';
import { MapPin, Search } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [header2Fixed, setHeader2Fixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Se desplaza hacia abajo
        setScrollingDown(true);
        if (currentScrollY > 80) {
          setHeader2Fixed(true); // Fija el subheader
        }
      } else {
        setScrollingDown(false);
        if (currentScrollY <= 80) {
          setHeader2Fixed(false);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative">
      {/* Header principal */}
      <header
        className={`w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg shadow-sm transition-transform duration-300 ease-in-out ${
          scrollingDown ? '-translate-y-20 sm:-translate-y-24' : 'translate-y-0'
        }`}
        style={{ zIndex: 10 }}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:py-4 flex flex-wrap items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold">TEX</span>
          </Link>

          {/* Input de búsqueda */}
          <div className="relative flex-grow max-w-xs mx-4">
            <input
              className="w-full py-2 pl-10 pr-4 border bg-white/50 backdrop-blur-lg rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Buscar productos..."
            />
            <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" size={18} />
          </div>

          {/* Selector de país */}
          <div className="relative mx-4">
            <select
              className="py-2 pl-10 pr-4 border bg-white rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="disabled"
            >
              <option value="disabled" disabled>
                País
              </option>
              <option value="co">Colombia</option>
              <option value="us">Estados Unidos</option>
            </select>
            <MapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" size={18} />
          </div>

          {/* Navegación (Cuenta y Carrito) */}
          <nav className="flex items-center gap-4 mx-4">
            <UserAccount />
            <CartSheet />
          </nav>
        </div>
      </header>

      {/* Subheader de categorías */}
      <div
        className={`w-full bg-gray-100 border-b border-gray-200 transition-transform duration-300 ease-in-out ${
          header2Fixed ? 'fixed top-0 left-0 right-0' : 'relative'
        }`}
        style={{ zIndex: 5 }}
      >
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-between">
          {/* Dropdown de Categorías */}
          <div className="relative mx-2">
            <select
              className="py-2 pl-10 pr-4 border bg-white rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="disabled"
            >
              <option value="disabled" disabled>
                Categorías
              </option>
              <option value="ropa">Ropa</option>
              <option value="accesorios">Accesorios</option>
              <option value="electronicos">Electrónicos</option>
              <option value="hogar">Hogar</option>
              <option value="deportes">Deportes</option>
            </select>
            <MapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" size={18} />
          </div>

          {/* Enlaces de Categorías */}
          <nav className="flex flex-wrap items-center gap-4 text-sm sm:text-base mx-2">
            <Link href="/categories/ropa" className="text-gray-600 hover:text-blue-500">
              Ropa
            </Link>
            <Link href="/categories/accesorios" className="text-gray-600 hover:text-blue-500">
              Accesorios
            </Link>
            <Link href="/categories/electronicos" className="text-gray-600 hover:text-blue-500">
              Electrónicos
            </Link>
            <Link href="/categories/hogar" className="text-gray-600 hover:text-blue-500">
              Hogar
            </Link>
            <Link href="/categories/deportes" className="text-gray-600 hover:text-blue-500">
              Deportes
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
