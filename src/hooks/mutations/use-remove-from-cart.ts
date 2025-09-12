import { useMutation, useQueryClient } from "@tanstack/react-query";

import { removeFromCart } from "@/actions/remove-from-cart";

import { GET_CART_QUERY_KEY } from "../queries/use-cart";

interface UseRemoveFromCartProps {
  cartItemId: string;
}

export const REMOVE_FROM_CART_MUTATION_KEY = "remove-from-cart";

export function useRemoveFromCart({ cartItemId }: UseRemoveFromCartProps) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [REMOVE_FROM_CART_MUTATION_KEY, cartItemId],
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CART_QUERY_KEY] });
    },
  });
}
