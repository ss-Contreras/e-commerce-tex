// src/redux/categorySlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Definir la interfaz según el endpoint
export interface Categoria {
  id: number;
  name: string;
  description: string;
}

interface CategoriaState {
  list: Categoria[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CategoriaState = {
  list: [],
  status: 'idle',
  error: null,
};

// Configuración de Axios sin httpsAgent
const categoriaApi = axios.create({
  baseURL: 'https://localhost:7119/api/Category',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thunk para obtener las categorías
export const fetchCategorias = createAsyncThunk('categorias/fetchCategorias', async () => {
  const response = await categoriaApi.get<Categoria[]>('/');
  return response.data;
});

// Thunk para crear una nueva categoría
export const createCategoria = createAsyncThunk(
  'categorias/createCategoria',
  async (categoria: { name: string; description: string }) => {
    const response = await categoriaApi.post('/', categoria);
    return response.data;
  }
);

// Thunk para actualizar una categoría
export const updateCategoria = createAsyncThunk(
  'categorias/updateCategoria',
  async ({ id, categoria }: { id: number; categoria: { name: string; description: string } }) => {
    // Si el backend requiere el ID en el cuerpo, se envía así
    const response = await categoriaApi.patch(`/${id}`, { categoriaID: id, ...categoria });
    return response.data;
  }
);

// Thunk para eliminar una categoría
export const deleteCategoria = createAsyncThunk('categorias/deleteCategoria', async (id: number) => {
  await categoriaApi.delete(`/${id}`);
  return id;
});

// Slice de Redux
const categorySlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategorias.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCategorias.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchCategorias.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Error desconocido';
      })
      .addCase(createCategoria.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateCategoria.fulfilled, (state, action) => {
        const index = state.list.findIndex(cat => cat.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteCategoria.fulfilled, (state, action) => {
        state.list = state.list.filter(cat => cat.id !== action.payload);
      });
  },
});

export default categorySlice.reducer;
