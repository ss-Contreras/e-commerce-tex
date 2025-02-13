export interface Product {
  // id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  // category: number;
  additionalDescription?: string;
  additionalDescription2?: string;
  additionalDescriptionActive?: boolean;
  additionalDescriptionActive2?: boolean;
  discountPrice?: string;
  discountPriceActive?: boolean;
  size?: string;
  brand?: string;
  is_active?: boolean;
  createdAt?: string;
  updatedAt?: string;
  colors?: number[];
  tags?: number[];
}

export interface Category {
  name : string;
  description : string;
}