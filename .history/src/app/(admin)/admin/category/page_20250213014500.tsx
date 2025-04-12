'use client'

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategorias, deleteCategoria } from '@/store/slices/categoriaSlice';
import { RootState, AppDispatch } from '@/store/store';
import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';

export default function ProductsPage() {

  const dispatch = useDispatch<AppDispatch>();
    const { list, status, error } = useSelector((state: RootState) => state.categorias);
  
    useEffect(() => {
      dispatch(fetchCategorias());
    }, [dispatch]);
  
    if (status === 'loading') return <p>Cargando categorías...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Categorias</h1>
        <Button 
        variant="default" 
        // onClick={handleAddPedido}
        >
          Añadir Categoria
        </Button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
            <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">ID</th>
            <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Nombre</th>
            <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Descripción</th>
            <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {list.map((cat) => (
              <tr key={cat.id} className="border-t">
                <td className="px-6 py-4 whitespace-nowrap">{cat.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cat.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cat.description}</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                <Button
                      variant="ghost"
                      size="icon"
                      // onClick={() => handleEditPedido(pedido)}
                      aria-label="Editar"
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => dispatch(deleteCategoria(cat.id))}
                      aria-label="Eliminar"
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}