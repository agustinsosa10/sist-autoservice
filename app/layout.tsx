"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react"; // Importamos SessionProvider
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <SessionProvider> {/* Envolvemos la aplicación con SessionProvider */}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
