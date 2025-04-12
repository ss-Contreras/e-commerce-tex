'use client'

import { Bell, Search, Sun, Moon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function AdminNavbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed w-full z-50 bg-white dark:bg-gray-800 border-b dark:border-gray-700 top-0 left-0">
      <div className="container flex h-16 items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-6"
        >
          <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            TEX Admin
          </span>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Buscar en el sistema..."
              className="pl-10 pr-4 py-2 w-96 rounded-xl bg-gray-50 dark:bg-gray-700 border-none"
            />
          </div>
        </motion.div>

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
          {/* <Avatar className="border-2 border-indigo-500">
            <AvatarImage src="/admin-avatar.jpg" />
            <AvatarFallback className="bg-indigo-500 text-white">AD</AvatarFallback>
          </Avatar> */}
        </div>
      </div>
    </header>
  );
}
