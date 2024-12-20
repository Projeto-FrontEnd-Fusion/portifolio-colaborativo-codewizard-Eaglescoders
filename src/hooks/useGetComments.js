import {  useQuery } from "@tanstack/react-query"
import { ServiceComments } from "../service/comments"
import { useHTTPcomments } from "../service/comments/useHTTPComments"
import { DEFAULT_CONFIG } from "./useMembers"
import { useMemo } from "react"

export const useGetComments = () => {

  const api = useHTTPcomments()
  const service = useMemo(() => new ServiceComments(), [api]);
  // Pegar comentários
  const { data } = useQuery({
    queryKey: ["get-comments", api],
    queryFn: () => service.getComments(api),
    staleTime: DEFAULT_CONFIG.staleTime,
    cacheTime: DEFAULT_CONFIG.cacheTime,
    retry: DEFAULT_CONFIG.retry
  })

  return {
    data
  }
}  