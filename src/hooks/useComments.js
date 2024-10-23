import { useMutation } from "@tanstack/react-query"
import { ServiceComments } from "../service/comments"
import { useMemo } from "react"
import { useForm } from "react-hook-form"
import { useHTTPcomments } from "../service/comments/useHTTPComments"

export const usePostComments = () => {

  const COMMENTS_QUERY_KEY = 'comments'
  const DEFAULT_CONFIG = {
    staleTime: 5 * 60 * 1000,
    cacheTime: 8 * 60 * 1000,
    retry: 3
  }


  const api = useHTTPcomments()
  const service = useMemo(() => new ServiceComments(api))
  const comments = useMutation({
    mutationFn: () => service.postComments(api),
    onSuccess: (data) => console.log("comentarios aqui", data),

  })

  const { handleSubmit, register, watch, formState: { errors } } = useForm({
    resolver: yupResolver(CommentsSchema)
  })
  const submitComments = (data) => {
    console.log(data)
  }

  return {
    handleSubmit: handleSubmit(submitComments),
    register,
    watch,
    errors
  }
}  