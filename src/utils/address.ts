import { ShippingAddress } from "@/_types/shipping";

export function formatToFullAddress(address: ShippingAddress) {
  return `${address.recipientName} • ${address.street}, ${address.number}
    ${address.complement && `, ${address.complement}`}, ${address.neighborhood}
    , ${address.city} - ${address.state} • CEP: ${address.zipCode}`;
}
