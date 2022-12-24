import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.upsert({
    where: { id: 0 },
    create: {
      id: 0,
      name: "Leather Long Wallet",
      color: "Natural",
      price: "$75",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    },
    update: {},
  });

  await prisma.product.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      name: "Black Basic",
      color: "Black",
      price: "$30",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    },
    update: {},
  });

  await prisma.product.upsert({
    where: { id: 2 },
    create: {
      id: 2,
      name: "Grey Basic",
      color: "Grey",
      price: "$45",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    },
    update: {},
  });

  await prisma.product.upsert({
    where: { id: 3 },
    create: {
      id: 3,
      name: "Flowerarray Shirt",
      color: "Beige",
      price: "$20",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    },
    update: {},
  });
}

main();
prisma.$disconnect();
