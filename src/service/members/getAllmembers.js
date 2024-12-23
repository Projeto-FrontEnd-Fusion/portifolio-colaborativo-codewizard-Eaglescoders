export const getAllMembers = async (api) => {
  const response = await api.get('api/EagleCoders')
  return response.data
}