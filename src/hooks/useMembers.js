import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ServiceMembers } from "../service/service";
import { useHttp } from "../service/useHTTP";
import { useCallback, useMemo } from "react";

export const useMembers = () => {
  const MEMBERS_QUERY_KEY = "getMembers";
  const DEFAULT_CONFIG = {
    staleTime: 5 * 60 * 1000,
    cacheTime: 6 * 60 * 1000,
    retry: 3,
  };

  const queryClient = useQueryClient();
  const api = useHttp();
  const service = useMemo(() => new ServiceMembers(), []);

  const invalidateMembers = useCallback(() => {
    queryClient.invalidateQueries(MEMBERS_QUERY_KEY);
  }, [queryClient, MEMBERS_QUERY_KEY]);

  const { data, isLoading, isError } = useQuery({
    queryKey: MEMBERS_QUERY_KEY,
    queryFn: () => service.get(api),
    staleTime: DEFAULT_CONFIG.staleTime,
    cacheTime: DEFAULT_CONFIG.cacheTime,
    retry: DEFAULT_CONFIG.retry,
    refetchOnWindowFocus: false,
    onError: (error) => console.error("Falha ao Obter Membros", error),
  });

  return {
    data,
    isLoading,
    isError,
    invalidateMembers,
  };
};
