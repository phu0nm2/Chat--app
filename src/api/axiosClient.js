import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000",
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
