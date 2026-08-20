import axios from "axios";

const apiUrl = globalThis.process?.env?.VITE_API_URL ?? "http://localhost:3000";

export const api = axios.create({
    baseURL: apiUrl,
    withCredentials: true
})
