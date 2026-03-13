"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button onClick={() => signIn("keycloak")}>Login dengan Keycloak</button>
    );
  }

  return (
    <>
      <p>Login sebagai {session.user?.name}</p>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}
