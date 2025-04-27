import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";
import { router } from "./routes";

const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; style-src 'self' https://www.gstatic.com;"
  );
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
