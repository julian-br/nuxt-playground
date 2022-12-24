import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const productId = event.context.params.id;

  const product = await prisma.product.findUnique({
    where: { id: parseInt(productId) },
  });
  if (product === null) {
    throw new Error("product not in database");
  }

  return product;
});
