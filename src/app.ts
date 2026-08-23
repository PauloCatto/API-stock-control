import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";
import { router } from "./routes";
import prisma from "./prisma";

const app = express();

const allowedOrigins = [
  "https://stock-control-self.vercel.app",
  "http://localhost:4200",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS: Origin '${origin}' not allowed`));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());
app.use(express.json({ limit: "10kb" }));

app.use((req, res, next) => {
  const timeout = setTimeout(() => {
    if (!res.headersSent) {
      res.status(504).json({ error: "Request timeout" });
    }
  }, 30000);

  res.on("finish", () => clearTimeout(timeout));
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    console.log(
      `${req.method} ${req.url} - ${res.statusCode} [${Date.now() - start}ms]`
    );
  });
  next();
});

app.get("/", (req, res) => {
  res.json({ status: "OK", timestamp: new Date() });
});

app.get("/health", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      status: "OK",
      database: "connected",
      timestamp: new Date(),
    });
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      database: "disconnected",
    });
  }
});

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);

  if (!res.headersSent) {
    res.status(400).json({ error: err.message });
  }
});

export default app;