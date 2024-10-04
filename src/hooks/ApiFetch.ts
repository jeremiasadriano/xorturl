import axios from "axios";
import { IUrlRequest } from "../types/ApiTypes";

const server = import.meta.env.VITE_SERVER_HOST;

export const api = axios.create({
  baseURL: server,
  timeout: 5000,
});

export async function fetchData<T>(url: string): Promise<T> {
  const response = await api.get(url);
  return response.data;
}

export async function postData<T>(url: string, data: IUrlRequest): Promise<T> {
  const response = await api.post(`${url}`, data);
  return response.data;
}
