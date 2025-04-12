'use client'

import { ReactNode, useState } from "react";
import { AdminNavbar } from "@/components/admin/Admin-navbar";
import { AdminSidebar } from "@/components/admin/Admin-sidebar";
import { AdminProvider } from "@/context/AdminContent";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const mobileSidebarToggle = () => {
    setMobileSidebarOpen((prev) => !prev);
  };

  return (
    <AdminProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
        {/* Sidebar para pantallas grandes */}
        <div className="hidden md:block">
          <AdminSidebar />
        </div>

        {/* Sidebar móvil */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={mobileSidebarToggle}
            />
            <div className="relative z-50 w-64">
              <AdminSidebar />
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col">
          {/* Se asume que AdminNavbar acepta la prop mobileSidebarToggle para mostrar el botón en móvil */}
          <AdminNavbar mobileSidebarToggle={mobileSidebarToggle} />
          <main className="ml-0 md:ml-64 mt-16 p-6 lg:p-8 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </AdminProvider>
  );
}
