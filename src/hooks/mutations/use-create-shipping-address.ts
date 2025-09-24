import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createShippingAddress } from "@/actions/create-shipping-address";

import { GET_USER_ADDRESSES_QUERY_KEY } from "../queries/use-user-addresses";

export const CREATE_SHIPPING_ADDRESS_MUTATION_KEY = "create-shipping-address";

export function useCreateShippingAddress() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [CREATE_SHIPPING_ADDRESS_MUTATION_KEY],
    mutationFn: createShippingAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_USER_ADDRESSES_QUERY_KEY],
      });
    },
  });
}
