import axios from "axios";

// const baseURL = "http://localhost:3000";
const baseURL = "https://your-pet-backend-g9fm.onrender.com";
export const axiosPublic = axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL,
});
