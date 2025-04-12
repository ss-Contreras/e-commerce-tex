'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProductos,
  createProducto,
  updateProducto,
  deleteProducto,
  toggleFeaturedProducto,
  Producto,
} from '@/store/slices/productoSlice';
import { RootState, AppDispatch } from '@/store/store';
import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';
import ProductoModal from '@/components/admin/Product-modal';
import { toast } from 'sonner';

export default function ProductosPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, status, error } = useSelector((state: RootState) => state.productos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState<Producto | null>(null);

  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]);

  const handleEdit = (producto: Producto) => {
    setSelectedProducto(producto);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    toast(
      <div className="flex justify-between items-center">
        <span>¿Eliminar producto?</span>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => {
            dispatch(deleteProducto(id))
              .unwrap()
              .then(() => toast.success('Producto eliminado'))
              .catch(() => toast.error('Error al eliminar'));
          }}
        >
          Confirmar
        </Button>
      </div>,
      {
        action: {
          label: 'Cancelar',
          onClick: () => console.log('Cancelado'),
        },
      }
    );
  };

  const handleSubmit = async (data: Partial<Producto>) => {
    try {
      if (selectedProducto) {
        await dispatch(updateProducto({ id: selectedProducto.id, producto: data })).unwrap();
        toast.success('Producto actualizado');
      } else {
        await dispatch(createProducto(data as Producto)).unwrap();
        toast.success('Producto creado');
      }
    } catch (error) {
      toast.error('Error al guardar');
    }
  };

  if (status === 'loading') return <div>Cargando productos...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Productos</h1>
        <Button onClick={() => setIsModalOpen(true)}>Añadir Producto</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(list) &&
              list.map((producto) => (
                <tr key={producto.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{producto.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{producto.nombre}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${producto.precio}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{producto.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-white ${
                        producto.estado === 'Disponible' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    >
                      {producto.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEdit(producto)}
                    >
                      <Pencil className="h-4 w-4 text-blue-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(producto.id)}
                    >
                      <Trash className="h-4 w-4 text-red-600" />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <ProductoModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProducto(null);
        }}
        producto={selectedProducto || undefined}
        onSubmit={handleSubmit}
      />
    </div>
  );
}