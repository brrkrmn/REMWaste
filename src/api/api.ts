import axios from "axios";

export const baseURL = "https://app.wewantwaste.co.uk/api/";

export const backendService = axios.create({
  baseURL: baseURL,
});