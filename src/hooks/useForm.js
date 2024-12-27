import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllComments } from "../service/comments/getallComments";
import { useHTTPcomments } from "../service/comments/useHTTPC";

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
