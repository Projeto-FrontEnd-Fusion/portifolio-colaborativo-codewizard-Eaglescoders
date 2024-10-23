import { useQueryClient } from "@tanstack/react-query"
import { ServiceComments } from "../service/comments"
import { useHTTPcomments } from "../service/comments/useHTTPComments"
import { useForm } from "react-hook-form"
import validationComments from "../model/schema/commentsSchema"
import { useCallback, useMemo } from "react"

export const usePostComment = () => {




  const { handleSubmit, register, watch, formState: { errors } } = useForm({
    resolver: yupResolver(validationComments)
  })
  const query = useQueryClient()
  const api = useHTTPcomments()

  const service = useMemo(() => new ServiceComments(api, [api]))


  const commentsMutation = useMutation({
    mutationFn: (data) => service.postComments(api, data),
    onSuccess: (data) => {
      console.log("comentarios aqui", data)
      query.invalidateQueries({ queryKey: ['comments'] })

    },
  })

  const submitComments = useCallback((data) => {
    console.log(data)
  }, [comments])

  return {
    handleSubmit: handleSubmit(submitComments),
    register,
    watch,
    errors
  }


}