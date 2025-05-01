import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";
import { router } from "./routes";
import timeout from "connect-timeout";

const app = express();

app.use(timeout("55s")); 
app.use((req, res, next) => {
  console.log(`Requisição recebida: ${req.method} ${req.url}`);
  const start = Date.now();
  res.on("finish", () => {
    console.log(`Requisição finalizada: ${req.method} ${req.url} - Tempo: ${Date.now() - start}ms`);
  });
  next();
});

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
});

app.get('/', (req, res) => {
    res.send('API funcionando!');
  });

export default app;
