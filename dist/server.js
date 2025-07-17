"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const isVercel = process.env.VERCEL === '1';
const handler = (0, serverless_http_1.default)(app_1.default);
if (!isVercel && process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3333;
    app_1.default.listen(PORT, () => {
        console.log(`🟢 Servidor LOCAL rodando: http://localhost:${PORT}`);
    });
}
exports.default = handler;
