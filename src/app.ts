import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";
import { router } from "./routes";

const app = express();

app.use((req, res, next) => {
  const timeout = setTimeout(() => {
    if (!res.headersSent) {
      res.status(504).json({ error: "Request timeout" });
    }
  }, 10000);

  res.on("finish", () => clearTimeout(timeout));
  next();
});

app.use(express.json({ limit: "10kb" }));
app.use(cors());

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    console.log(
      `${req.method} ${req.url} - ${res.statusCode} [${Date.now() - start}ms]`
    );
  });
  next();
});

app.use(router);

app.get("/", (req, res) => {
  res.json({ status: "OK", timestamp: new Date() });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
