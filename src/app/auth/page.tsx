import { Header } from "@/components/common/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SignInForm } from "./sign-in-form";
import { SignUpForm } from "./sign-up-form";

export default function AuthPage() {
  return (
    <>
      <Header />

      <div className="mx-auto flex h-screen w-full max-w-sm flex-1 flex-col gap-6 px-3.5 pt-[72px] md:max-w-md lg:max-w-lg lg:justify-center">
        <Tabs defaultValue="sign-in">
          <TabsList>
            <TabsTrigger value="sign-in">Entrar</TabsTrigger>
            <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
          </TabsList>

          <TabsContent value="sign-in">
            <SignInForm />
          </TabsContent>

          <TabsContent value="sign-up">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
