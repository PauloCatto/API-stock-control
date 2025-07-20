import app from "./app";
import prisma from "./prisma";

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");

    // Only start server in development, not in serverless environment
    if (process.env.NODE_ENV !== 'production') {
      const port = process.env.PORT || 3333;
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    }
  } catch (error) {
    console.error("Failed to start server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

// For serverless environments (Render/Vercel)
if (process.env.NODE_ENV === 'production') {
  // Export the app directly
  module.exports = app;
} else {
  // Start server for development
  startServer();
}