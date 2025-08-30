import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({});

export const signInWithGoogle = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
};

export const signOut = async () => {
  await authClient.signOut();
};
