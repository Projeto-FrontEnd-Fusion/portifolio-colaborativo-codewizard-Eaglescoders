export const getAllComments = async (api) => {
  const response = await api.post("comments/get")
  return response.data
}