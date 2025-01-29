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
        // mueve el header 2 hacia la parte superior
        setScrollingDown(true);
        if (currentScrollY > 80) {
          setHeader2Fixed(true); // Fija el header 2 en la parte superior
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
      {/* Header principal*/}
      <header
        className={`w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg shadow-sm transition-all duration-300 ease-in-out ${scrollingDown ? '-translate-y-24' : 'translate-y-0'
          }`}
        style={{ zIndex: 10 }}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Hero"
              width={80}
              height={80}
              className="object-cover"
            />

            {/* <span className="text-xl font-bold">TEX</span> */}
          </Link>

          {/* Input de búsqueda */}
          <div className="relative w-full sm:w-auto">
            <input
              className="py-2 pl-10 pr-4 border w-full sm:w-[300px] md:w-[400px] bg-white/50 backdrop-blur-lg rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Buscar productos..."
            />
            <svg
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Search />
            </svg>
          </div>

          {/* Selección de país */}
          <div className="relative">
            <select
              className="py-2 pl-10 pr-4 border w-[200px] sm:w-[180px] bg-white rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="disabled"
            >
              <option value="disabled" disabled>
                País
              </option>
              <option value="co">Colombia</option>
              <option value="us">Estados Unidos</option>
            </select>
            <svg
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <MapPin />
            </svg>
          </div>

          <nav className="flex items-center gap-4">
            <Link href="/products">
              <Button variant="ghost">Productos</Button>
            </Link>
            <Link href="/category">
              <Button variant="ghost">Categorías</Button>
            </Link>
            <UserAccount />
            <CartSheet />
          </nav>
        </div>
      </header>

      {/* Subheader de Categorías que se fija en la parte superior cuando hace scroll hacia abajo */}
      <div
        className={`w-full bg-gray-100 border-b border-gray-200 transition-all duration-300 ease-in-out ${header2Fixed ? 'fixed top-0 left-0 right-0' : 'relative'
          }`}
        style={{ zIndex: 5 }}
      >
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          {/* Dropdown de Categorías */}
          <div className="relative">
            <select
              className="py-2 pl-10 pr-4 border w-[200px] sm:w-[180px] bg-white rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <svg
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <MapPin />
            </svg>
          </div>

          {/* Enlaces de categorías */}
          <nav className="flex items-center gap-6 text-sm sm:text-base">
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
