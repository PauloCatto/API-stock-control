"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const prisma_1 = __importDefault(require("./prisma"));
const startServer = async () => {
    try {
        await prisma_1.default.$connect();
        console.log("Database connected successfully");
        const port = process.env.PORT || 3333;
        app_1.default.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
        await prisma_1.default.$disconnect();
        process.exit(1);
    }
};
startServer();
// Also export for Vercel/serverless environments just in case
exports.default = app_1.default;
