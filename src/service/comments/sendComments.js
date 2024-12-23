export const sendComments = async (api, data) => {
  const response = await api.post('/comments/send', data)
  return response.data
}