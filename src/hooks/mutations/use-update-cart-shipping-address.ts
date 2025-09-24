import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateCartShippingAddress } from "@/actions/update-cart-shipping-address";

import { GET_CART_QUERY_KEY } from "../queries/use-cart";

export const UPDATE_CART_SHIPPING_ADDRESS_MUTATION_KEY =
  "update-cart-shipping-address";

export function useUpdateCartShippingAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [UPDATE_CART_SHIPPING_ADDRESS_MUTATION_KEY],
    mutationFn: updateCartShippingAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_CART_QUERY_KEY],
      });
    },
  });
}
