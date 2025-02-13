"use client"

import React, { useEffect } from 'react';
import { useGlobalState } from '@/store/globalState';
import { Product } from '@/utils/types';
import { ProductCard } from './Product-card';

const ProductList: React.FC = () => {
  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://tex-eccomerce.onrender.com/api/v1/product/');
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data: Product[] = await response.json();
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {state.products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductList;
