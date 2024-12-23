import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useHTTPcomments } from "../service/comments/useHTTPcomments";
import { getAllComments } from "../service/comments/getallComments";

export const useFormComments = () => {
  const api = useHTTPcomments();
  const query = useQueryClient();
  const queryKey = ["comments"];

  const comments = useMutation({
    mutationFn: async () => {
      await getAllComments(api);
      query.invalidateQueries({ queryKey });
    },
    mutationKey: queryKey,
  });

  return {
    comments,
  };
};
