// src/utils/types.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categoryId: number;
  isPublished: boolean;
  image: string; // Propiedad requerida
  images?: string[]; // Propiedad opcional para imágenes adicionales
}

export interface Category {
  id: number;
  name: string;
  description: string;
}