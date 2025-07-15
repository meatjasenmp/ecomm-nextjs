export const getApiUrl = (endpoint: string) => {
  return typeof window === "undefined"
    ? `${process.env.API_URL || "http://localhost:8080"}${endpoint}`
    : `/api${endpoint}`;
};
