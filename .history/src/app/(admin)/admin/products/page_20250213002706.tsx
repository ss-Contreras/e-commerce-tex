'use client';

import React, { useState } from 'react';
import { Pencil, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ModalForm from '@/components/admin/Admin-modal-add';

interface Producto {
  id: string;
  nombre: string;
  precio: number;
  stock: number;
  estado: string;
}

export default function ProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([
    {
      id: '#001',
      nombre: 'Producto A',
      precio: 20,
      stock: 100,
      estado: 'Disponible',
    },
    {
      id: '#002',
      nombre: 'Producto B',
      precio: 40,
      stock: 50,
      estado: 'Agotado',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProducto, setEditingProducto] = useState<Producto | null>(null);

  const handleAddProducto = () => {
    setEditingProducto(null);
    setIsModalOpen(true);
  };

  const handleEditProducto = (producto: Producto) => {
    setEditingProducto(producto);
    setIsModalOpen(true);
  };

  const handleDeleteProducto = (id: string) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSubmit = (data: any) => {
    if (editingProducto) {
      // Editar
      setProductos((prev) =>
        prev.map((p) => (p.id === editingProducto.id ? { ...p, ...data } : p))
      );
    } else {
      // Añadir
      const newProducto: Producto = {
        id: data.id,
        nombre: data.nombre,
        precio: Number(data.precio),
        stock: Number(data.stock),
        estado: data.estado,
      };
      setProductos((prev) => [...prev, newProducto]);
    }
  };

  return (
    <div className="p-6">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Productos</h1>
        <Button variant="default" onClick={handleAddProducto}>
          Añadir Producto
        </Button>
      </div>

      {/* Tabla */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">
                ID
              </th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">
                Producto
              </th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">
                Precio
              </th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">
                Stock
              </th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">
                Estado
              </th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {productos.map((producto) => (
              <tr key={producto.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{producto.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{producto.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap">${producto.precio}</td>
                <td className="px-6 py-4 whitespace-nowrap">{producto.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {producto.estado === 'Disponible' ? (
                    <span className="text-green-600 font-semibold">
                      Disponible
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">Agotado</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    {/* Lápiz con fondo azul */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditProducto(producto)}
                      aria-label="Editar"
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    {/* Papelera destructiva */}
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDeleteProducto(producto.id)}
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
        type="producto"
        onSubmit={handleSubmit}
        initialData={editingProducto}
      />
    </div>
  );
}
