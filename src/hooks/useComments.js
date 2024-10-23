import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ServiceComments } from "../service/comments"
import { useMemo } from "react"
import { useForm } from "react-hook-form"
import { useHTTPcomments } from "../service/comments/useHTTPComments"

export const usePostComments = () => {

  const COMMENTS_QUERY_KEY = 'comments'


  const api = useHTTPcomments()
  const service = useMemo(() => new ServiceComments(api))
  const query = useQueryClient()
  const comments = useMutation({
    mutationFn: () => service.postComments(api),
    onSuccess: (data) => {
      console.log("comentarios aqui", data)
      query.invalidateQueries({ queryKey: COMMENTS_QUERY_KEY })

    },

  })

  const { handleSubmit, register, watch, formState: { errors } } = useForm({
    resolver: yupResolver(CommentsSchema)
  })
  const submitComments = (data) => {
    console.log(data)
    //comments.mutate(data)
  }

  return {
    handleSubmit: handleSubmit(submitComments),
    register,
    watch,
    errors
  }
}  