import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ['warn', 'error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;