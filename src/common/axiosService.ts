import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.deezer.com/",
  headers: {
    "Access-Control-Allow-Origin": "*", 
  },
});

export { apiClient };
