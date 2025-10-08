import { apiClient } from "./client";

export const getResourceTypes = (params) =>
  apiClient.get("/resource-types", { params });
