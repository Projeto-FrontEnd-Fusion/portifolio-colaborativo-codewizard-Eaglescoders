import { useQuery } from "@tanstack/react-query"
import { useHTTPcomments } from "../service/comments/useHTTPcomments"
import { getAllComments } from "../service/comments/getallComments"
export const useGetAllComments = () => {

  // Pegar comentários

  const api = useHTTPcomments()

  const { data, isError, isLoading, isPending, refetch } = useQuery({
    queryKey: ["get-comments"],
    queryFn: () => getAllComments(api),
    retry: 3
  })

  return {
    data, isError, isLoading, isPending
  }
}  