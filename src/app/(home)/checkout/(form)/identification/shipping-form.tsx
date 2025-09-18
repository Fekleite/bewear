"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { z } from "zod";

import { ShippingAddress } from "@/_types/shipping";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { formatToFullAddress } from "@/utils/address";

interface ShippingFormProps {
  shippingAddresses: ShippingAddress[];
  defaultShippingAddressId: string | null;
}

const formSchema = z.object({
  email: z.email("E-mail inválido"),
  fullName: z.string().min(1, "Nome completo é obrigatório"),
  cpf: z.string().min(14, "CPF inválido"),
  phone: z.string().min(15, "Celular inválido"),
  zipCode: z.string().min(9, "CEP inválido"),
  address: z.string().min(1, "Endereço é obrigatório"),
  number: z.string().min(1, "Número é obrigatório"),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "Bairro é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatória"),
  state: z.string().min(1, "Estado é obrigatório"),
});

type FormData = z.infer<typeof formSchema>;

export function ShippingForm({
  shippingAddresses,
  defaultShippingAddressId,
}: ShippingFormProps) {
  const [selectedAddress, setSelectedAddress] = useState(
    defaultShippingAddressId ?? "new-address",
  );

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullName: "",
      cpf: "",
      phone: "",
      zipCode: "",
      address: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  function onSubmit(values: FormData) {
    console.log(values);
  }

  return (
    <div className="space-y-8">
      <RadioGroup
        defaultValue="option-one"
        value={selectedAddress}
        onValueChange={setSelectedAddress}
        className="space-y-3"
      >
        {shippingAddresses.map((address) => (
          <div
            key={address.id}
            className="border-muted flex w-full items-center gap-6 rounded-lg border p-6"
          >
            <RadioGroupItem value={address.id} id={address.id} />
            <Label className="text-sm font-medium" htmlFor={address.id}>
              {formatToFullAddress(address)}
            </Label>
          </div>
        ))}

        <div className="border-muted flex w-full items-center gap-6 rounded-lg border p-6">
          <RadioGroupItem value="new-address" id="new-address" />
          <Label className="text-sm font-medium" htmlFor="new-address">
            Adicionar novo
          </Label>
        </div>
      </RadioGroup>

      {selectedAddress === "new-address" && (
        <>
          <Separator />

          <div className="space-y-6">
            <p className="text-sm font-semibold">Adicionar novo</p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          type="email"
                          {...field}
                          className="h-12 text-sm"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Nome completo"
                          {...field}
                          className="h-12 text-sm"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="cpf"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <PatternFormat
                            format="###.###.###-##"
                            placeholder="CPF/CNPJ"
                            customInput={Input}
                            {...field}
                            className="h-12 text-sm"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <PatternFormat
                            format="(##) #####-####"
                            placeholder="Celular"
                            customInput={Input}
                            {...field}
                            className="h-12 text-sm"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <PatternFormat
                          format="#####-###"
                          placeholder="CEP"
                          customInput={Input}
                          {...field}
                          className="h-12 text-sm"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Endereço"
                          {...field}
                          className="h-12 text-sm"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Número"
                            {...field}
                            className="h-12 text-sm"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="complement"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Complemento"
                            {...field}
                            className="h-12 text-sm"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <FormField
                    control={form.control}
                    name="neighborhood"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Bairro"
                            {...field}
                            className="h-12 text-sm"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Cidade"
                            {...field}
                            className="h-12 text-sm"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Estado"
                            {...field}
                            className="h-12 text-sm"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full">
                  Continuar com o pagamento
                </Button>
              </form>
            </Form>
          </div>
        </>
      )}
    </div>
  );
}
