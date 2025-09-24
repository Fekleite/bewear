import { useQuery } from "@tanstack/react-query";

import { ShippingAddress } from "@/_types/shipping";
import { getUserAddresses } from "@/actions/get-user-addresses";

interface UseGetUserAddressesProps {
  initialData?: ShippingAddress[];
}

export const GET_USER_ADDRESSES_QUERY_KEY = "user-addresses";

export const useUserAddresses = ({ initialData }: UseGetUserAddressesProps) => {
  return useQuery({
    queryKey: [GET_USER_ADDRESSES_QUERY_KEY],
    queryFn: getUserAddresses,
    initialData: initialData,
  });
};
