import axios from "axios";

const API = axios.create({
  baseURL: "https://bookstore-backend.onrender.com/api/books",
});

export default API;
