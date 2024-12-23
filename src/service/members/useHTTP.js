import { setup } from "./setupMembers"

const URL = import.meta.env.VITE_API_MEMBERS
export const useHTTPmembers = () =>{
  const api = setup(URL)
  return api
}