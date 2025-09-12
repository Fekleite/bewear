import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addToCart } from "@/actions/add-to-cart";

import { GET_CART_QUERY_KEY } from "../queries/use-cart";

interface UseAddToCart {
  variantId: string;
  quantity: number;
}

export const ADD_TO_CART_MUTATION_KEY = "add-to-cart";

export function useAddToCart({ variantId, quantity }: UseAddToCart) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ADD_TO_CART_MUTATION_KEY, variantId, quantity],
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CART_QUERY_KEY] });
    },
  });
}
