import axios from "axios";

// Check the .env.example file for the environment variables
const baseURL =
  import.meta.env.VITE_REACT_APP_BASE_URL;


// Create a new instance of axios with baseURL set from environment variable
export const api = axios.create({
  baseURL,
});
