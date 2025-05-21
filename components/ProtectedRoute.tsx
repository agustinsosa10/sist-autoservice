"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirige al inicio de sesión si la sesión no es válida
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }

    // Configura un intervalo para verificar la sesión periódicamente
    const interval = setInterval(() => {
      if (!session) {
        router.push("/auth/signin"); // Redirige si la sesión ha expirado
      }
    }, 5 * 60 * 1000); // Verifica cada 5 minutos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [session, status, router]);

  // Muestra un estado de carga mientras verifica la sesión
  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  // Si no hay sesión válida, no muestra el contenido
  if (status === "unauthenticated") {
    return null;
  }

  // Muestra el contenido si la sesión es válida
  return <>{children}</>;
}