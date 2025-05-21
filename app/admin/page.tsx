"use client";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-center mt-20 text-6xl font-black">Panel de Administración</h1>
        <p className="text-center mt-4">Bienvenido al panel de administración protegido.</p>
      </div>
    </ProtectedRoute>
  );
}