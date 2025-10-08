import { apiClient } from "./client";

export const getResources = (params) => apiClient.get("/resources", { params });

export const getResourceDetail = (id) => apiClient.get(`/resources/${id}`);

export const createResource = (data) => apiClient.post("/resources", data);
export const updateResource = (id, data) =>
  apiClient.put(`/resources/${id}`, data);
export const deleteResource = (id) => apiClient.delete(`/resources/${id}`);
