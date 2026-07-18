import axios from "axios";

console.log("VITE_API_URL =", import.meta.env.VITE_API_URL);

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Add Clerk token to every request
axiosInstance.interceptors.request.use(async (config) => {
  if (window.Clerk?.session) {
    const token = await window.Clerk.session.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default axiosInstance;