import app from "./app";
import prisma from "./prisma";
import { createServer } from "http";
import { setupWebsocket } from "./websocket";

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");

    const port = process.env.PORT || 3333;
    const httpServer = createServer(app);
    setupWebsocket(httpServer);

    httpServer.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

startServer();

// Also export for Vercel/serverless environments just in case
export default app;