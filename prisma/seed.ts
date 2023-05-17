import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.todo.create({
    data: {
      content: "Learn Next.js",
    },
  });
  await prisma.todo.create({
    data: {
      content: "Learn Prisma",
    },
  });
  await prisma.todo.create({
    data: {
      content: "Learn GraphQL",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
