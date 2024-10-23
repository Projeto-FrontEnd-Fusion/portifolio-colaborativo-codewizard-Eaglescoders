export const postOneComment = async (api) =>{
  const response = await api.post('comments/send')
  return response
}