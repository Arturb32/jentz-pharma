// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export enum ProductCategory {
  MEDICINE = "MEDICINE",
  WELLNESS = "WELLNESS",
  EQUIPMENT = "EQUIPMENT",
  OTHER = "OTHER",
}

export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  medicationId: number;
  category: ProductCategory;
  createdAt?: Date;
  updatedAt?: Date;
  productImageUrl?: String;
  leafletUrl?: String;
};

export type Medication = {
  id: number;
  name: string;
  products: Product[];
  dosage?: string;
  sideEffects?: string;
  prescriptionRequired: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  primarySupplierId?: number;
};

export type Supplier = {
  id: number;
  name: string;
  contactInfo?: string;
  createdAt?: Date;
  updatedAt?: Date;
  primaryMedications: Medication[];
};

export type Assistant = {
  content: string;
  role: string;
};

export type Message = {
  content: string;
  role: string;
};
