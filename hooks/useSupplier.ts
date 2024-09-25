import { useQuery } from "react-query";
import { getSupplier } from "../pages/api/users/products/supplier";
import { Supplier } from "../types";

export const useSupplier = (id: number) => {
  const query = useQuery({
    queryKey: ["supplier", id],
    queryFn: async ({ signal }) => {
      if (!id) {
        return { data: {}, error: null };
      }

      return await getSupplier(id, signal);
    },
    staleTime: Infinity,
  });

  return {
    supplier: query.data as Supplier,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};
