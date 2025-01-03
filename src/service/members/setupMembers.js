import axios from "axios"

export const setup = (baseURL) => {
  const api = axios.create({
    baseURL,
    headers: "Content-type : Application/json"
  })

  return api
}