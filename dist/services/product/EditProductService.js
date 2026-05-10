"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class EditProductService {
    async execute({ name, amount, description, price, product_id, category_id, }) {
        const productExists = await prisma_1.default.product.findFirst({
            where: {
                id: product_id,
            },
        });
        if (!productExists) {
            throw new Error("Esse produto não existe!");
        }
        const productEdited = await prisma_1.default.product.update({
            where: {
                id: product_id,
            },
            data: {
                name: name,
                amount: +amount,
                description: description,
                price: price,
                category_id: category_id
            },
        });
        return productEdited;
    }
}
exports.EditProductService = EditProductService;
