"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((req, res, next) => {
    const timeout = setTimeout(() => {
        if (!res.headersSent) {
            res.status(504).json({ error: "Request timeout" });
        }
    }, 10000);
    res.on("finish", () => clearTimeout(timeout));
    next();
});
app.use(express_1.default.json({ limit: "10kb" }));
app.use((0, cors_1.default)());
app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        console.log(`${req.method} ${req.url} - ${res.statusCode} [${Date.now() - start}ms]`);
    });
    next();
});
app.use(routes_1.router);
app.get("/", (req, res) => {
    res.json({ status: "OK", timestamp: new Date() });
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});
exports.default = app;
