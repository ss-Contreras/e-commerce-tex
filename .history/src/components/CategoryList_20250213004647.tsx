'use client'

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategorias, deleteCategoria } from '../store/slices/categoriaSlice';
import { RootState, AppDispatch } from '../store/store';

const CategoryList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, status, error } = useSelector((state: RootState) => state.categorias);

  useEffect(() => {
    dispatch(fetchCategorias());
  }, [dispatch]);

  if (status === 'loading') return <p>Cargando categorías...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Gestión de Categorías</h2>
      <ul>
        {list.map((cat) => (
          <li key={cat.id}>
            {cat.name} - {cat.description}
            <button onClick={() => dispatch(deleteCategoria(cat.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
