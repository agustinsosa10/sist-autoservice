"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSignIn = async (e: any) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    await signIn("credentials", {
      username,
      password,
      callbackUrl: "/admin", // Redirige al admin tras login
    });
  };

  return (
    <div style={{ margin: "2rem", textAlign: "center" }}>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Usuario:</label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}