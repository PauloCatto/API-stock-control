"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeleteProductService {
    async execute({ product_id }) {
        if (!product_id) {
            throw new Error("Id do produto não foi enviado!");
        }
        const deleteProduct = await prisma_1.default.product.delete({
            where: {
                id: product_id,
            },
        });
        return deleteProduct;
    }
}
exports.DeleteProductService = DeleteProductService;
