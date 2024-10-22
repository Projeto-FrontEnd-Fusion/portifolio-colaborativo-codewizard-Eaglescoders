import { apiSetup } from "./apisetup"

export const useHttp = () => {
  const api = apiSetup('https://sistema-cadastro-dados-portifolio-front-end-fusion.vercel.app/')
  return api
}