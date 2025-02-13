// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../store/slices/categoriaSlice';

const store = configureStore({
  reducer: {
    categorias: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
