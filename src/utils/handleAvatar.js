import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useHandleAvatar = () => {
  const query = useQueryClient();
  const queryKey = ["getAvatar"];

  const avatarMutation = useMutation({
    mutationFn: async (githubuser) => {
      const response = await axios.get(`https://api.github.com/users/${githubuser}`);
      return response.data.avatar_url;
    },
    onSuccess: (data) => {
      query.invalidateQueries(queryKey);
      console.log('Avatar obtido com sucesso:', data);
    },
    onError: (error) => {
      console.error("Falha ao obter avatar:", error);
    },
  });

  const fetchAvatar = (githubuser) => {
    avatarMutation.mutate(githubuser)
  }

  return {
    fetchAvatar,
    avatarUrl: avatarMutation.isSuccess ? avatarMutation.data : null,
    isError: avatarMutation.isError,
    isLoading: avatarMutation.isLoading,
  };
};
