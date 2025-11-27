export interface Product {
    _id?: string;
  name: string;
  description?: string;
  price: number;
  category: 'Electronics' | 'Clothing' | 'Food' | 'Books' | 'Other';
  stock: number;
  isAvailable?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
