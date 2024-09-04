import { useQuery } from "react-query";
import { getMedications } from "../pages/api/users/products/medications";
import { Medication } from "../types";

export const useMedications = () => {
  const query = useQuery({
    queryKey: "medications",
    queryFn: async ({ signal }) => {
      return await getMedications(signal);
    },
    staleTime: Infinity,
  });

  return {
    medications: query.data as Medication[],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};
