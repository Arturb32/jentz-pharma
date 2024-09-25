import { useQuery } from "react-query";
import { getSuppliers } from "../pages/api/users/products/supplier";
import { Supplier } from "../types";

export const useSuppliers = () => {
  const query = useQuery({
    queryKey: "suppliers",
    queryFn: async ({ signal }) => {
      return await getSuppliers(signal);
    },
    staleTime: Infinity,
  });

  return {
    suppliers: query.data as Supplier[],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};
