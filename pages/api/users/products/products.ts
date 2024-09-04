import { api } from "../../axiosConfig";
import { Product } from "../../../../types";

export const getProduct = async (
  id: number,
  signal?: AbortSignal
): Promise<Product> => {
  try {
    const response = await api.get<Product>(`/products/${id}`, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (signal?: AbortSignal): Promise<Product[]> => {
  console.log(api);
  try {
    const response = await api.get<Product[]>("/products", {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (
  product: Product,
  signal?: AbortSignal
): Promise<Product> => {
  try {
    const response = await api.post<Product>("/products", product, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (
  product: Product,
  signal?: AbortSignal
): Promise<Product> => {
  try {
    const response = await api.patch<Product>(
      `/products/${product.id}`,
      product,
      {
        signal,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (
  id: number,
  signal?: AbortSignal
): Promise<void> => {
  try {
    await api.delete(`/products/${id}`, {
      signal,
    });
  } catch (error) {
    console.log(error);
  }
};
