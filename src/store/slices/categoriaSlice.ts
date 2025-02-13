// src/redux/categorySlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Configurar Axios para la API de categorías
const categoriaApi = axios.create({
  baseURL: "https://localhost:7119/api/Category",
  headers: {
    "Content-Type": "application/json",
  },
  httpsAgent: new (require("https").Agent)({
    rejectUnauthorized: false,
  }),
});

// Estado inicial
interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
}

interface CategoriaState {
  list: Categoria[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CategoriaState = {
  list: [],
  status: "idle",
  error: null,
};

// Thunks para manejar llamadas a la API

export const fetchCategorias = createAsyncThunk("categorias/fetchCategorias", async () => {
  const response = await categoriaApi.get("/");
  return response.data;
});

export const createCategoria = createAsyncThunk(
  "categorias/createCategoria",
  async (categoria: { nombre: string; descripcion: string }) => {
    const response = await categoriaApi.post("/", categoria);
    return response.data;
  }
);

export const updateCategoria = createAsyncThunk(
  "categorias/updateCategoria",
  async ({ id, categoria }: { id: number; categoria: { nombre: string; descripcion: string } }) => {
    const response = await categoriaApi.patch(`/${id}`, { categoriaID: id, ...categoria });
    return response.data;
  }
);

export const deleteCategoria = createAsyncThunk("categorias/deleteCategoria", async (id: number) => {
  await categoriaApi.delete(`/${id}`);
  return id;
});

// Crear el slice de Redux
const categorySlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategorias.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategorias.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCategorias.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error desconocido";
      })
      .addCase(createCategoria.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateCategoria.fulfilled, (state, action) => {
        const index = state.list.findIndex((cat) => cat.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteCategoria.fulfilled, (state, action) => {
        state.list = state.list.filter((cat) => cat.id !== action.payload);
      });
  },
});

export default categorySlice.reducer;
