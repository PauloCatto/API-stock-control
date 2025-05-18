"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const routes_1 = require("./routes");
const prisma_1 = __importDefault(require("./prisma"));
const app = (0, express_1.default)();
app.use((req, res, next) => {
    const timeout = setTimeout(() => {
        if (!res.headersSent) {
            res.status(504).json({ error: "Request timeout" });
        }
    }, 10000);
    res.on('finish', () => clearTimeout(timeout));
    next();
});
// Middleware de conexão otimizada
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma_1.default.$connect();
        next();
    }
    catch (error) {
        next(error);
    }
}));
app.use(express_1.default.json({ limit: '10kb' })); // Limita tamanho do payload
app.use((0, cors_1.default)());
// Log simplificado
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        console.log(`${req.method} ${req.url} - ${res.statusCode} [${Date.now() - start}ms]`);
    });
    next();
});
app.use(routes_1.router);
// Rota de health check simplificada
app.get('/', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});
// Middleware de erro otimizado
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});
// Fecha conexão do Prisma após cada resposta
app.use((req, res, next) => {
    res.on('finish', () => {
        prisma_1.default.$disconnect().catch(console.error);
    });
    next();
});
exports.default = app;
