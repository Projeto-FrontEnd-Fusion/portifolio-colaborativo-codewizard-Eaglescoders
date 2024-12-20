import { getAllComments } from "./methods/get"
import { postOneComment } from "./methods/post"

export class ServiceComments {
  
  getComments = async (api) => {
    try {
      const comments = await getAllComments(api)
      return comments
    } catch (error) {
      throw error
    }
  }

  postComments = async (api, data) => {
    try{
      const comments = await postOneComment(api, data)
      return comments
    }catch(error){
      throw error
    }
  }
}