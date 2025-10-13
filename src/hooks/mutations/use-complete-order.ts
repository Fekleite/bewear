import { useMutation, useQueryClient } from "@tanstack/react-query";

import { completeOrder } from "@/actions/complete-order";

import { GET_CART_QUERY_KEY } from "../queries/use-cart";

export const COMPLETE_ORDER_MUTATION_KEY = "complete-order";

export const useCompleteOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [COMPLETE_ORDER_MUTATION_KEY],
    mutationFn: completeOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CART_QUERY_KEY] });
    },
  });
};
