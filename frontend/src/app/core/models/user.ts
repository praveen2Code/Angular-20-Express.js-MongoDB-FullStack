export interface User {
    _id?: string;
  name: string;
  email: string;
  age?: number;
  phone?: string;
  address?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
