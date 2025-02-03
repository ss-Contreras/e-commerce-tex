import { ReactNode } from "react";
import { AdminNavbar } from "@/components/admin/Admin-navbar";
import { AdminSidebar } from "@/components/admin/Admin-sidebar";
import { AdminProvider } from "@/context/AdminContent";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
        <AdminSidebar />

        <div className="flex-1 flex flex-col">
          {/* Adjusted the navbar's space for content */}
          <AdminNavbar />
          <main className="ml-64 mt-16 p-6 lg:p-8 overflow-auto">{children}</main>
        </div>
      </div>
    </AdminProvider>
  );
}
