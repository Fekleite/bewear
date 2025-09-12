import { useQuery } from "@tanstack/react-query";

import { getCart } from "@/actions/get-cart";

export const GET_CART_QUERY_KEY = "get-cart";

export function useCart() {
  return useQuery({
    queryKey: [GET_CART_QUERY_KEY],
    queryFn: getCart,
  });
}
