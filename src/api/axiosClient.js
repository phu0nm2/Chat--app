import axios from "axios";

const token = localStorage.getItem("token");

const axiosClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    token,
  },
});
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    return Promise.reject(err);
  },
);

export default axiosClient;
