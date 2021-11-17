import axios from "axios";
let api = axios.create();
api.defaults.baseURL = '/api/';
let token = window.config.api_token;
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
export default api;
