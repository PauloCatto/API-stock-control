"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../prisma"));
class AuthUserService {
    async execute({ email, password }) {
        if (!email) {
            throw new Error("Email precisa ser enviado!");
        }
        if (!password) {
            throw new Error("A senha precisa ser enviado!");
        }
        const user = await prisma_1.default.user.findFirst({
            where: {
                email: email,
            },
        });
        if (!user) {
            throw new Error("Wrong username or password!");
        }
        const passwordMatch = await (0, bcryptjs_1.compare)(password, user?.password);
        if (!passwordMatch) {
            throw new Error("Wrong password");
        }
        const token = (0, jsonwebtoken_1.sign)({
            name: user?.name,
            email: user?.email,
        }, process.env.JWT_SECRET, {
            subject: user?.id,
            expiresIn: "30d",
        });
        return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            token: token,
        };
    }
}
exports.AuthUserService = AuthUserService;
