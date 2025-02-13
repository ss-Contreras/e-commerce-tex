'use client'

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategorias, deleteCategoria } from '@/store/slices/categoriaSlice';
import { RootState, AppDispatch } from '@/store/store';

export default function ProductsPage() {

  const dispatch = useDispatch<AppDispatch>();
    const { list, status, error } = useSelector((state: RootState) => state.categorias);
  
    useEffect(() => {
      dispatch(fetchCategorias());
    }, [dispatch]);
  
    if (status === 'loading') return <p>Cargando categorías...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Categorias</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Añadir Categoria</button>
      </div>
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Descripción</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {list.map((cat) => (
              <tr key={cat.id} className="border-t">
                <td className="px-4 py-2">{cat.id}</td>
                <td className="px-4 py-2">{cat.name}</td>
                <td className="px-4 py-2">{cat.description}</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-600">Editar</button>
                  <button className="text-red-600">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}