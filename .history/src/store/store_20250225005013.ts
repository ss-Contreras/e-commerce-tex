// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categoriaSlice';
import productoReducer from './slices/productoSlice';

const store = configureStore({
  reducer: {
    categorias: categoryReducer,
    productos: productoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;