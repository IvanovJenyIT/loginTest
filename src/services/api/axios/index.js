import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "https://parsers-test.useid.pro/api/",
  headers: {"Access-Control-Allow-Origin": "*"},
  withCredentials: true,
}, );

axiosInstance.interceptors.request.use(
  
  (config) => {
    // debugger
    const authToken = Cookies.get("auth-token");

    if (authToken) {
      config.headers.authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
