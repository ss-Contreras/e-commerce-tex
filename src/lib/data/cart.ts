export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    size?: string;
    color?: string;
  }
  
  export const mockCartItems: CartItem[] = [
    {
      id: '1',
      name: 'Hoodie Tailwind',
      price: 89.99,
      quantity: 2,
      image: '/images/tailwind-hoodie.jpg',
      size: 'M',
      color: 'Negro'
    },
    {
      id: '2',
      name: 'Gorra Next',
      price: 149.99,
      quantity: 1,
      image: '/images/next-cap.jpg',
      size: '42'
    }
  ];