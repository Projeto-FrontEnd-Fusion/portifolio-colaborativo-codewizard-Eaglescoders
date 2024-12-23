import { getAllMembers } from "../service/members/getAllmembers"
import { useHTTPmembers } from "../service/members/useHTTP"
import { useQuery } from "@tanstack/react-query"

export const useMembersFetch = () => {
  const api = useHTTPmembers()

  const { data, isLoading } = useQuery({
    queryKey: ["members"],
    queryFn: () => getAllMembers(api)
  })

  return {
    data,
    isLoading

  }

}