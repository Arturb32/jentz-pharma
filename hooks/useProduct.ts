import { Product } from "../types";
import { useQuery } from "react-query";
import { getProduct } from "../pages/api/users/products/products";

export const useProduct = (id: number) => {
  const query = useQuery({
    queryKey: ["product", id],
    queryFn: async ({ signal }) => {
      if (!id) {
        return { data: {}, error: null };
      }

      return await getProduct(id, signal);
    },
    staleTime: Infinity,
  });

  return {
    product: query.data as Product,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};
