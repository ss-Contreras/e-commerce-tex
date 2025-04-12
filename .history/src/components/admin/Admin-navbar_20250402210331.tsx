'use client'

import { Bell, Search, Sun, Moon, Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

interface AdminNavbarProps {
  mobileSidebarToggle?: () => void;
}

export function AdminNavbar({ mobileSidebarToggle }: AdminNavbarProps) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed w-full z-50 bg-white dark:bg-gray-800 border-b dark:border-gray-700 top-0 left-0">
      <div className="container flex h-16 items-center justify-between px-4">
        
        {/* Botón para abrir el Sidebar en móviles */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={mobileSidebarToggle}
          >
            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </Button>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              TEX Admin
            </span>
          </motion.div>
        </div>

        {/* Input de búsqueda (Siempre visible en pantallas pequeñas) */}
        <div className="relative flex-1 max-w-xs md:max-w-md lg:max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Buscar en el sistema..."
            className="pl-10 pr-4 py-2 w-full rounded-xl bg-gray-50 dark:bg-gray-700 border-none"
          />
        </div>

        {/* Iconos de acciones */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
