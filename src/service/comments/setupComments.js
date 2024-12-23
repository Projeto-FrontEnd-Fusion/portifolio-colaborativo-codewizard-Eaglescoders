import axios from "axios"

export const setupCom = (baseURL) => {
  const api = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" }
  })

  return api
}