'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Package, Users, ShoppingCart, Settings, BarChart, Folder } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const links = [
  { href: '/admin', icon: LayoutDashboard, text: 'Dashboard' },
  { href: '/admin/products', icon: Package, text: 'Productos' },
  { href: '/admin/category', icon: Folder, text: 'Categorias' },
  { href: '/admin/orders', icon: ShoppingCart, text: 'Pedidos' },
  { href: '/admin/users', icon: Users, text: 'Usuarios' },
  { href: '/admin/analytics', icon: BarChart, text: 'Analíticas' },
  { href: '/admin/administration', icon: Settings, text: 'Administración' },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 fixed left-0 top-16 h-screen bg-white dark:bg-gray-800 border-r dark:border-gray-700">
      <nav className="p-4 space-y-1">
        {links.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={link.href}
              className={cn(
                'flex items-center gap-3 p-3 rounded-lg transition-colors',
                pathname === link.href
                  ? 'bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              )}
            >
              <link.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{link.text}</span>
            </Link>
          </motion.div>
        ))}
      </nav>
    </aside>
  );
}
