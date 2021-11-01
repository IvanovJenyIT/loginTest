import axios from "../axios";

const endpoints = {
  registration: (data) => axios.post("login/login", data),
  login: (data) => axios.post("login/login", data),
  forgotPassword: (data) => axios.post("login/login", data),
  getProfile: () => axios.get("login/login"),
  updateProfile: (data) => axios.patch("login/login", data),
};

export default endpoints;
