import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useHTTPcomments } from "../service/comments/useHTTPcomments"
import { sendComments } from "../service/comments/sendComments"
export const usePostComment = () => {
  const query = useQueryClient()
  const api = useHTTPcomments()

  const commentsMutation = useMutation({
    mutationFn: (data) => sendComments(api, data),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: ['comments'] })
      console.log(data)

    },
  })

  return {
    isLoading: commentsMutation.isLoading,
    isError: commentsMutation.isError,
    isSuccess: commentsMutation.isSuccess,
  }


}