'use client';

import { ReactNode, useState } from 'react';
import { AdminNavbar } from '@/components/admin/Admin-navbar';
import { AdminSidebar } from '@/components/admin/Admin-sidebar';
import { AdminProvider } from '@/context/AdminContent';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const mobileSidebarToggle = () => {
    setMobileSidebarOpen((prev) => !prev);
  };

  return (
    <AdminProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex overflow-x-hidden">
        {/* Sidebar para pantallas grandes */}
        <div className="hidden md:flex">
          <AdminSidebar />
        </div>

        {/* Sidebar móvil */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={mobileSidebarToggle}
            />
            <div className="relative z-50 w-64 bg-white dark:bg-gray-800">
              <AdminSidebar />
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col">
          <AdminNavbar mobileSidebarToggle={mobileSidebarToggle} />
          <main className="ml-0 md:ml-64 mt-16 p-4 sm:p-6 lg:p-8 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </AdminProvider>
  );
}
