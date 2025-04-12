'use client';

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '@/store/slices/productSlice';
import { RootState, AppDispatch } from '@/store/store';
import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import ProductForm, { ProductFormData } from '@/components/Product-form'

export default function ProductsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, status, error } = useSelector((state: RootState) => state.products);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductFormData | null>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setOpenDialog(true);
  };

  const handleEditProduct = (product: ProductFormData) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const onSubmit = (data: ProductFormData) => {
    if (selectedProduct && selectedProduct.id) {
      // Actualiza el producto
      dispatch(updateProduct({ id: selectedProduct.id, product: data }));
    } else {
      // Crea el producto
      dispatch(createProduct(data));
    }
    setOpenDialog(false);
  };

  const handleDeleteProduct = (id: number) => {
    dispatch(deleteProduct(id));
    setOpenDeleteDialog(null);
  };

  if (status === 'loading') return <p>Cargando productos...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Productos</h1>
        <Button variant="default" onClick={handleAddProduct}>
          Añadir Producto
        </Button>
      </div>

      {/* Tabla de Productos */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">ID</th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Nombre</th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Precio</th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Stock</th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Estado</th>
              <th className="px-6 py-3 text-left font-bold text-gray-700 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {list.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">${product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.stockQuantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.isPublished ? (
                    <span className="text-green-600 font-semibold">Publicado</span>
                  ) : (
                    <span className="text-red-600 font-semibold">No publicado</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    {/* Botón Editar */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditProduct(product)}
                      aria-label="Editar"
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    {/* Botón Eliminar con AlertDialog */}
                    <AlertDialog open={openDeleteDialog === product.id} onOpenChange={(open) => {
                      if (!open) setOpenDeleteDialog(null);
                    }}>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          size="icon"
                          aria-label="Eliminar"
                          onClick={() => setOpenDeleteDialog(product.id)}
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <div>
                          <AlertDialogHeader>
                            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Esta acción no se puede deshacer. El producto será eliminado permanentemente.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteProduct(product.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Eliminar
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </div>
                      </AlertDialogContent>

                    </AlertDialog>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para Agregar/Editar */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <span /> {/* Necesario para el trigger, aunque lo controlemos desde código */}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <div>
            <DialogHeader>
              <DialogTitle>{selectedProduct ? 'Editar Producto' : 'Nuevo Producto'}</DialogTitle>
            </DialogHeader>
            <ProductForm
              initialData={selectedProduct || undefined}
              onSubmit={onSubmit}
              onCancel={() => setOpenDialog(false)}
            />
          </div>
        </DialogContent>

      </Dialog>
    </div>
  );
}
