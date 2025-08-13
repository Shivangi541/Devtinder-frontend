// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // change if backend runs elsewhere
  withCredentials: true, // always send cookies with requests
});

export default api;
