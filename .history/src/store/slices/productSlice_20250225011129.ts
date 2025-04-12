import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  estado: 'Disponible' | 'Agotado';
}

interface ProductoState {
  list: Producto[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductoState = {
  list: [],
  status: 'idle',
  error: null,
};

const productoApi = axios.create({
  baseURL: 'https://localhost:7119/api/products',
  headers: { 'Content-Type': 'application/json' },
});

export const fetchProductos = createAsyncThunk('productos/fetchProductos', async () => {
  const response = await productoApi.get('/');
  return response.data;
});

export const updateProducto = createAsyncThunk(
  'productos/updateProducto',
  async ({ id, producto }: { id: number; producto: Partial<Producto> }) => {
    const response = await productoApi.patch(`/${id}`, producto);
    return response.data;
  }
);

export const deleteProducto = createAsyncThunk('productos/deleteProducto', async (id: number) => {
  await productoApi.delete(`/${id}`);
  return id;
});

const productoSlice = createSlice({
  name: 'productos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchProductos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Error desconocido';
      })
      .addCase(updateProducto.fulfilled, (state, action) => {
        const index = state.list.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteProducto.fulfilled, (state, action) => {
        state.list = state.list.filter((p) => p.id !== action.payload);
      });
  },
});

export default productoSlice.reducer;