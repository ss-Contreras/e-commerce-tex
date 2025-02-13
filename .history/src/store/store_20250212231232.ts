import { configureStore } from '@reduxjs/toolkit';
import categoriaReducer from './slices/categoriaSlice';

const store = configureStore({
  reducer: {
    categoria: categoriaReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
