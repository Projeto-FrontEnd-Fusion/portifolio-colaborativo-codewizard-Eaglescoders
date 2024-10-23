import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ServiceComments } from "../service/comments"
import { useHTTPcomments } from "../service/comments/useHTTPComments"
import { useForm } from "react-hook-form"
import { validationComments } from "../model/schema/commentsSchema"
import { useCallback, useMemo } from "react"
import { yupResolver } from "@hookform/resolvers/yup"

export const usePostComment = () => {

  const { handleSubmit, register, watch, formState: { errors }, reset } = useForm({
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

const onSubmit = (data) =>{
  commentsMutation.mutate(data)
}
  return {
    handleSubmit: handleSubmit(onSubmit),
    isLoading: commentsMutation.isLoading,
    isError: commentsMutation.isError,
    register,
    watch,
    errors,
    reset
  }


}