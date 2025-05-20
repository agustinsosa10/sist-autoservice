"use server"

import { prisma } from "@/src/lib/prisma"
import { revalidatePath } from "next/cache"

export async function deleteProduct(id: number) {
  try {
    await prisma.product.delete({
      where: { id }
    })
    // Revalida la ruta de la administración de productos para actualizar la UI
    revalidatePath("/admin/products")
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}