'use client';

import Link from 'next/link';
import { Icons } from "@/components/Icon";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Grid de contenido */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Sobre Nosotros */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">About Us</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              At TEX, we provide the highest quality products for all your needs. Your satisfaction is our priority. 
            </p>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>
                <Link href="/products/clothing" className="hover:text-blue-500 transition-colors">Clothing</Link>
              </li>
              <li>
                <Link href="/products/electronics" className="hover:text-blue-500 transition-colors">Electronics</Link>
              </li>
              <li>
                <Link href="/products/home" className="hover:text-blue-500 transition-colors">Home & Kitchen</Link>
              </li>
              <li>
                <Link href="/products/toys" className="hover:text-blue-500 transition-colors">Toys</Link>
              </li>
            </ul>
          </div>

          {/* Enlace rápido */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Suscripción al Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow py-2 px-4 border rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Información de copyright y redes sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} TEX. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-blue-500 transition-colors">
            <Facebook />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" className="text-gray-500 hover:text-blue-500 transition-colors">
              <Twitter />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-blue-500 transition-colors">
              <Instagram />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-500 transition-colors">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
