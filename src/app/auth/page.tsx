import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SignInForm } from "./sign-in-form";
import { SignUpForm } from "./sign-up-form";

export default function AuthPage() {
  return (
    <div className="flex h-screen w-full max-w-sm flex-col justify-center gap-6 px-3.5">
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
  );
}
