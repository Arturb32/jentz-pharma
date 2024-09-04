import { api } from "../../axiosConfig";
import { Medication } from "../../../../types";

export const getMedication = async (
  id: number,
  signal?: AbortSignal
): Promise<Medication> => {
  try {
    const response = await api.get(`/medications/${id}`, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMedications = async (
  signal?: AbortSignal
): Promise<Medication[]> => {
  try {
    const response = await api.get("/medications", {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createMedication = async (
  medication: Medication,
  signal?: AbortSignal
): Promise<Medication> => {
  try {
    const response = await api.post("/medications", medication, {
      signal,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateMedication = async (
  medication: Medication,
  signal?: AbortSignal
): Promise<Medication> => {
  try {
    const response = await api.put(
      `/medications/${medication.id}`,
      medication,
      {
        signal,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMedication = async (
  id: number,
  signal?: AbortSignal
): Promise<void> => {
  try {
    await api.delete(`/medications/${id}`, {
      signal,
    });
  } catch (error) {
    console.log(error);
  }
};
