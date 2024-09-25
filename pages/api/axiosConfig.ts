import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_JENTZ_API_URL;

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
