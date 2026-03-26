"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  async function callBackend() {
    const res = await fetch("http://127.0.0.1:8000/api/v1/protected", {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });

    const data = await res.json();
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  }

  if (!session) {
    return (
      <button onClick={() => signIn("keycloak")}>Login dengan Keycloak</button>
    );
  }

  return (
    <>
      <p>Login sebagai {session.user?.name}</p>
      <button onClick={() => signOut()}>Logout</button>
      <button onClick={callBackend}>Call Backend</button>
    </>
  );
}
