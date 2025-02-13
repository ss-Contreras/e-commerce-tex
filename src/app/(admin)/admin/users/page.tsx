'use client';

import React, { useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ModalForm from '@/components/admin/Admin-modal-add';

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  estado: string;
  compras: number;
}

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    {
      id: 1,
      nombre: 'Juan Perez',
      correo: 'juanperez@example.com',
      estado: 'Activo',
      compras: 5,
    },
    {
      id: 2,
      nombre: 'María Gomez',
      correo: 'mariagomez@example.com',
      estado: 'Inactivo',
      compras: 2,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUsuario, setEditingUsuario] = useState<Usuario | null>(null);

  const handleAddUsuario = () => {
    setEditingUsuario(null);
    setIsModalOpen(true);
  };

  const handleEditUsuario = (usuario: Usuario) => {
    setEditingUsuario(usuario);
    setIsModalOpen(true);
  };

  const handleDeleteUsuario = (id: number) => {
    setUsuarios((prev) => prev.filter((u) => u.id !== id));
  };

  const handleSubmit = (data: any) => {
    if (editingUsuario) {
      // Editar
      setUsuarios((prev) =>
        prev.map((u) => (u.id === editingUsuario.id ? { ...u, ...data } : u))
      );
    } else {
      // Añadir
      const newUsuario: Usuario = {
        id: usuarios.length + 1,
        nombre: data.nombre,
        correo: data.correo,
        estado: data.estado,
        compras: Number(data.compras) || 0,
      };
      setUsuarios((prev) => [...prev, newUsuario]);
    }
  };

  return (
    <div className="p-6">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Usuarios</h1>
        <Button variant="default" onClick={handleAddUsuario}>
          Añadir Usuario
        </Button>
      </div>

      {/* Tabla */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">
                Usuario
              </th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">
                Correo
              </th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">
                Estado
              </th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">
                Compras
              </th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {usuarios.map((usuario) => (
              <tr key={usuario.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{usuario.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap">{usuario.correo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{usuario.estado}</td>
                <td className="px-6 py-4 whitespace-nowrap">{usuario.compras}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    {/* Lápiz con fondo azul */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditUsuario(usuario)}
                      aria-label="Editar"
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    {/* Papelera (igual que antes, destructivo) */}
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDeleteUsuario(usuario.id)}
                      aria-label="Eliminar"
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="usuario"
        onSubmit={handleSubmit}
        initialData={editingUsuario}
      />
    </div>
  );
}
