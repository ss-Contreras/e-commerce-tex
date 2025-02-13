// src/components/CategoryList.tsx
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategorias, deleteCategoria } from "../redux/categorySlice";
import { RootState, AppDispatch } from "../redux/store";

const CategoryList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, status, error } = useSelector((state: RootState) => state.categorias);

  useEffect(() => {
    dispatch(fetchCategorias());
  }, [dispatch]);

  if (status === "loading") return <p>Cargando categorías...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Categorías</h2>
      <ul>
        {list.map((categoria) => (
          <li key={categoria.id}>
            {categoria.nombre} - {categoria.descripcion}
            <button onClick={() => dispatch(deleteCategoria(categoria.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
