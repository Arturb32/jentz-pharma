// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
  description: string;
  category: string;
  stock: number;
  manufacturer: string;
  expirationDate: string;
  composition: string;
  indications: string;
  contraindications: string;
  warnings: string;
  precautions: string;
  adverseReactions: string;
  presentation: string;
  registration: string;
  laboratorialTests: string;
  therapeuticClass: string;
};

export type Cart = {
  products: Product[];
  total: number;
};
