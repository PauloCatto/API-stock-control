"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
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
exports.default = prisma;
