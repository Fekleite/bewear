import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateCartItemQuantity } from "@/actions/update-cart-item-quantity";

import { GET_CART_QUERY_KEY } from "../queries/use-cart";

interface UseUpdateCartItemQuantityProps {
  cartItemId: string;
}

export const UPDATE_CART_ITEM_QUANTITY_MUTATION_KEY =
  "update-cart-item-quantity";

export function useUpdateCartItemQuantity({
  cartItemId,
}: UseUpdateCartItemQuantityProps) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [UPDATE_CART_ITEM_QUANTITY_MUTATION_KEY, cartItemId],
    mutationFn: updateCartItemQuantity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CART_QUERY_KEY] });
    },
  });
}
