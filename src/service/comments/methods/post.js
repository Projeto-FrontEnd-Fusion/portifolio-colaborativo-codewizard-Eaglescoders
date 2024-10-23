export const postOneComment = async (api, data) =>{
  const response = await api.post('comments/send', data)
  return response
}