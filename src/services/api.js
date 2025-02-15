import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
  headers: { "Content-Type": "application/json; charset-uf-8" },
});

export default api;
