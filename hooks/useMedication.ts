import { useQuery } from "react-query";
import { getMedication } from "../pages/api/users/products/medications";
import { Medication } from "../types";

export const useMedication = (id: number) => {
  const query = useQuery({
    queryKey: ["medication", id],
    queryFn: async ({ signal }) => {
      if (!id) {
        return { data: {}, error: null };
      }

      return await getMedication(id, signal);
    },
    staleTime: Infinity,
  });

  return {
    medication: query.data as Medication,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};
