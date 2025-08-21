"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    name: z.string().trim().min(1, "Nome é obrigatório."),
    email: z.email("Email inválido."),
    password: z.string().min(8, "Senha deve ter pelo menos 8 caracteres."),
    passwordConfirmation: z
      .string()
      .min(8, "Confirmação de senha deve ter pelo menos 8 caracteres."),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    error: "A senha e a confirmação de senha devem ser iguais.",
    path: ["passwordConfirmation"],
  });

type FormData = z.infer<typeof formSchema>;

export function SignUpForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  function onSubmit(values: FormData) {
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Crie sua conta</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite seu nome"
                      autoComplete="off"
                      {...field}
                      className="text-sm"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite seu e-mail"
                      autoComplete="off"
                      type="email"
                      {...field}
                      className="text-sm"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite sua senha"
                      type="password"
                      {...field}
                      className="text-sm"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite sua senha novamente"
                      type="password"
                      {...field}
                      className="text-sm"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Criar conta
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
