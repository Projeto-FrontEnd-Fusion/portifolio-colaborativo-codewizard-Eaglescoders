import { setupCom } from "./setupComments"

const URL = import.meta.env.VITE_API_URL
export const useHTTPcomments = () => {
  const api = setupCom(URL)
  return api
}