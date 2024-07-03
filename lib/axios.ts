import axios from "axios";

export const http = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "https://api.kickscraper.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 10000,
});
export const cms = axios.create({
  // baseURL: "https://kickscraper-cms.onrender.com/api",
  baseURL: "https://cms.kickscraper.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 10000,
});
