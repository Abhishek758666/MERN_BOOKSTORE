import axios from "axios";
export const Instance = axios.create({
  baseURL: "https://mern-bookstore-backend-bog2.onrender.com/",
});
