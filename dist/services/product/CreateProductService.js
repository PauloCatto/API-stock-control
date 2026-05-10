"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateProductService {
    async execute({ name, price, description, category_id, amount, }) {
        const product = await prisma_1.default.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                category_id: category_id,
                amount: +amount,
            },
        });
        return product;
    }
}
exports.CreateProductService = CreateProductService;
