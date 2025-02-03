// context/AdminContext.tsx
'use client';

import { createContext, useContext, ReactNode } from 'react';

type AdminContextType = {
  // Agrega aquí el estado global del dashboard
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  return (
    <AdminContext.Provider value={{}}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}