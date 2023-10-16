import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const getToken = () => {
  return localStorage.getItem("token");
};

instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
