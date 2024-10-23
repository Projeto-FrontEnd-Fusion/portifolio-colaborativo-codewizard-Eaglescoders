import { apiSetup } from "../apisetup";

export const useHTTPcomments = () => {
  const api = apiSetup("https://eaglescoders-api.onrender.com");
  return api;
};
