import app from './app';
import prisma from './prisma';

async function main() {
  try {
    await prisma.$connect();
    console.log("Prisma conectado!");
    const port = process.env.PORT || 10000;
    app.listen(port, () => {
      console.log(`🟢 Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error("Erro ao conectar Prisma:", error);
    process.exit(1);
  }
}

main();
