import { getAllComments } from "./methods/get"
import { postOneComment } from "./methods/post"

export class ServiceComments {
  getComments = async (api) => {
    try {
      const comments = await getAllComments(api)
      return comments
    } catch (error) {
      console.error("Falha ao Buscar Comentarios", error)
      throw error
    }
  }

  postComments = async (api) => {
    try{
      const comments = await postOneComment(api)
      return comments
    }catch(error){
      console.error("Falha ao Postar Coemntário", error)
      throw error
    }
  }
}