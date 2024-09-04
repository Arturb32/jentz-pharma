import { useQuery } from "react-query";
import { getProducts } from "../pages/api/users/products/products";
import { Product } from "../types";

export const useProducts = () => {
  const query = useQuery({
    queryKey: "products",
    queryFn: async ({ signal }) => {
      return await getProducts(signal);
    },
    staleTime: Infinity,
  });

  return {
    products: query.data as Product[],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};
