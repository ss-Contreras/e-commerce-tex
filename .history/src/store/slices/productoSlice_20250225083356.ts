// store/slices/productSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '@/utils/types';

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   stockQuantity: number;
//   categoryId: number;
//   isPublished: boolean;
// }

interface ProductState {
  list: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductState = {
  list: [],
  status: 'idle',
  error: null,
};

const productApi = axios.create({
  baseURL: 'https://localhost:7119/api/products',
});

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await productApi.get<Product[]>('/');
  return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id: number) => {
  await productApi.delete(`/${id}`);
  return id;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Error desconocido';
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.list = state.list.filter(product => product.id !== action.payload);
      });
  },
});

export default productSlice.reducer;