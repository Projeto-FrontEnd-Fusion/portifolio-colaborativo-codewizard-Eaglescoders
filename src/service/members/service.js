import { getAllMembers } from "./methods/get"

export class ServiceMembers {

  async get(api) {
    try {
      const members = await getAllMembers(api)
      return members
    } catch (error) {
      throw error
    }
  }
}