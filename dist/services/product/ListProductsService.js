"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class ListProductService {
    async execute() {
        const products = await index_1.default.product.findMany({
            select: {
                id: true,
                name: true,
                amount: true,
                description: true,
                price: true,
                category: true,
            },
            orderBy: {
                created_at: "desc",
            },
        });
        return products;
    }
}
exports.ListProductService = ListProductService;
