export const getAllMembers = async (api) => {
  try {
    const response = await api.get('api/EagleCoders')
    return response.data
  } catch (error) {
    console.error('Falha ao Acessar Rota', error)
    throw error
  }
}