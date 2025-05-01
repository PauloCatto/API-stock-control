import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";
import { router } from "./routes";
import prisma from "./prisma";

const app = express();

// Middleware de timeout explícito
app.use((req, res, next) => {
  res.setTimeout(10000, () => { // 10 segundos por requisição
    if (!res.headersSent) {
      res.status(504).json({ error: "Request timeout" });
    }
  });
  next();
});

// Middleware de conexão otimizada
app.use(async (req, res, next) => {
  try {
    await prisma.$connect();
    next();
  } catch (error) {
    next(error);
  }
});

app.use(express.json({ limit: '10kb' })); // Limita tamanho do payload
app.use(cors());

// Log simplificado
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    console.log(`${req.method} ${req.url} - ${res.statusCode} [${Date.now() - start}ms]`);
  });
  next();
});

app.use(router);

// Rota de health check simplificada
app.get('/', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Middleware de erro otimizado
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Fecha conexão do Prisma após cada resposta
app.use((req, res, next) => {
  res.on('finish', () => {
    prisma.$disconnect().catch(console.error);
  });
  next();
});

export default app;