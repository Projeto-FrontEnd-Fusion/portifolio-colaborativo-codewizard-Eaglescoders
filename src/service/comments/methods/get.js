export const getAllComments = (api) => {
  const response = api.get("/comments/get")
  return response.data
}