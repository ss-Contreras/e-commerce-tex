// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categoriaSlice';
import productReducer from './slices/productoSlice';

const store = configureStore({
  reducer: {
    categorias: categoryReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;