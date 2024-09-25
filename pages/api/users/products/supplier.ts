import { Supplier } from "../../../../types";
import { api } from "../../axiosConfig";

export const getSupplier = async (
  id: number,
  signal?: AbortSignal
): Promise<Supplier> => {
  try {
    const response = await api.get(`/suppliers/${id}`, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSuppliers = async (
  signal?: AbortSignal
): Promise<Supplier[]> => {
  try {
    const response = await api.get("/suppliers", {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createSupplier = async (
  supplier: Supplier,
  signal?: AbortSignal
): Promise<Supplier> => {
  try {
    const response = await api.post("/suppliers", supplier, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateSupplier = async (
  supplier: Supplier,
  signal?: AbortSignal
): Promise<Supplier> => {
  try {
    const response = await api.put(`/suppliers/${supplier.id}`, supplier, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSupplier = async (
  id: number,
  signal?: AbortSignal
): Promise<void> => {
  try {
    await api.delete(`/suppliers/${id}`, {
      signal,
    });
  } catch (error) {
    console.log(error);
  }
};
