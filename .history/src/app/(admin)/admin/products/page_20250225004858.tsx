'use client';

import React, { useState, useEffect } from 'react';
import { Pencil, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EditModal } from '@/components/Edit-modal';
import { DeleteModal } from '@/components/Delete-modal';
import { fetchProductos, deleteProducto, updateProducto } from '@/store/slices/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';

interface Producto {
  id: string;
  nombre: string;
  precio: number;
  stock: number;
  estado: string;
}

export default function ProductosPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, status, error } = useSelector((state: RootState) => state.products);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState<Producto | null>(null);

  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]);

  const handleEdit = (producto: Producto) => {
    setSelectedProducto(producto);
    setIsEditModalOpen(true);
  };

  const handleDelete = (producto: Producto) => {
    setSelectedProducto(producto);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedProducto) {
      dispatch(deleteProducto(selectedProducto.id));
      setIsDeleteModalOpen(false);
    }
  };

  const handleSubmitEdit = (data: any) => {
    if (selectedProducto) {
      dispatch(updateProducto({ id: selectedProducto.id, producto: data }));
      setIsEditModalOpen(false);
    }
  };

  if (status === 'loading') return <p>Cargando productos...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Productos</h1>
        <Button variant="default" onClick={() => setIsEditModalOpen(true)}>
          Añadir Producto
        </Button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">ID</th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Producto</th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Precio</th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Stock</th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Estado</th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {list.map((producto:any) => (
              <tr key={producto.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{producto.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{producto.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap">${producto.precio}</td>
                <td className="px-6 py-4 whitespace-nowrap">{producto.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {producto.estado === 'Disponible' ? (
                    <span className="text-green-600 font-semibold">Disponible</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Agotado</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(producto)}
                      aria-label="Editar"
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(producto)}
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

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleSubmitEdit}
        initialData={selectedProducto}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}