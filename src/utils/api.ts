import axios from 'axios'
import { Categoria } from '@/utils/types'

// Base de todos los endpoints de Category
const categoriaApi = axios.create({
    baseURL: 'https://localhost:7119/api/Category',
    headers:{
        'Content-Type': 'application/json',
    },
    httpsAgent: new (require('https').Agent)({
        rejectUnauthorized: false,
    })
})

// Obtener categorías (GET)
export const getCategorias = async () => {
    try {
      const response = await categoriaApi.get('/');
      return response.data;
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
      throw error;
    }
  };

// Crear una nueva categoría (POST)
export const createCategoria = async (categoria: { nombre: string; descripcion: string }) => {
    try {
      const response = await categoriaApi.post('/', categoria);
      return response.data;
    } catch (error) {
      console.error('Error al crear la categoría:', error);
      throw error;
    }
  };

  // Editar una categoría (PATCH)
export const updateCategoria = async (id: number, categoria: { nombre: string; descripcion: string }) => {
    try {
      // El backend requiere el ID en el cuerpo de la solicitud.
      const categoriaConId = {
        categoriaID: id, // Incluyendo el ID en el cuerpo, tal como requiere el backend
        ...categoria,
      };
      const response = await categoriaApi.patch(`/${id}`, categoriaConId);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`Error al editar la categoría con ID ${id}: ${error.response?.status} - ${error.response?.statusText}`);
        console.error('Detalles del error:', error.response?.data);
      } else {
        console.error('Error desconocido al editar la categoría:', error);
      }
      throw error;
    }
  };
  
  // Eliminar una categoría (DELETE)
  export const deleteCategoria = async (id: number) => {
    try {
      const response = await categoriaApi.delete(`/${id}`);
      return response.data; // Aun si el backend devuelve un 204, manejar los datos de respuesta
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`Error al eliminar la categoría con ID ${id}: ${error.response?.status} - ${error.response?.statusText}`);
        console.error('Detalles del error:', error.response?.data);
      } else {
        console.error('Error desconocido al eliminar la categoría:', error);
      }
      throw error;
    }
  };