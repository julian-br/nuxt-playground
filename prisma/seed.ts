import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.test.upsert({
    where: { id: 0 },
    create: {
      id: 0,
      title: "test0",
    },
    update: {},
  });

  await prisma.test.upsert({
    where: { id: 1 },
    create: {
      id: 1,
      title: "test0",
    },
    update: {},
  });

  await prisma.test.upsert({
    where: { id: 2 },
    create: {
      id: 2,
      title: "test0",
    },
    update: {},
  });
}

main();
prisma.$disconnect();
