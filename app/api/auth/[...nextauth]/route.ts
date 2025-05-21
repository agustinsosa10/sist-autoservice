import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials || {};
        if (username === "admin" && password === "password") {
          return { id: "1", name: "Admin", email: "admin@example.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Página de inicio de sesión
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    // La sesión expirará después de 30 minutos (1800 segundos)
    maxAge: 1 * 60, // Tiempo en segundos
    // Renueva automáticamente la sesión solo si está activa
    updateAge: 5 * 60, // Renueva la sesión si queda menos de 5 minutos para expirar
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };