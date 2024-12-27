import { useQuery } from "@tanstack/react-query"
import { getAllComments } from "../service/comments/getallComments"
import { useHTTPcomments } from "../service/comments/useHTTPC"
export const useGetAllComments = () => {
  const api = useHTTPcomments()

  const { data, isError, isLoading, isPending } = useQuery({
    queryKey: ["get-comments"],
    queryFn: () => getAllComments(api),
    retry: 3
  })

  return {
    data, isError, isLoading, isPending
  }
}  