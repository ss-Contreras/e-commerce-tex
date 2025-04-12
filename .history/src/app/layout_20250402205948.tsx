'use client';

import { ReactNode, useState } from 'react';
import { AdminNavbar } from '@/components/admin/Admin-navbar';
import { AdminSidebar } from '@/components/admin/Admin-sidebar';
import { AdminSidebarMobile } from '@/components/admin/Admin-sidebar-mobile';
import { AdminProvider } from '@/context/AdminContent';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const mobileSidebarToggle = () => {
    setMobileSidebarOpen((prev) => !prev);
  };

  return (
    <AdminProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        {/* Navbar siempre en la parte superior */}
        <AdminNavbar mobileSidebarToggle={mobileSidebarToggle} />

        {/* Sidebar móvil: se despliega debajo del header */}
        {mobileSidebarOpen && (
          <div className="md:hidden">
            <AdminSidebarMobile />
          </div>
        )}

        {/* Área de contenido */}
        <div className="flex flex-1">
          {/* Sidebar de escritorio */}
          <div className="hidden md:block">
            <AdminSidebar />
          </div>
          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </AdminProvider>
  );
}
