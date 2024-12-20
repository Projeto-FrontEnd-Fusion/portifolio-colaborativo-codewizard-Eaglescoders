import { apiSetup } from "../apisetup";
const url = import.meta.env.VITE_API_URL

export const useHTTPcomments = () => {
  const api = apiSetup("https://eaglescoders-api.onrender.com");
  return api;
};
