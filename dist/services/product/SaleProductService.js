"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleProductService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class SaleProductService {
    async execute({ product_id, amount }) {
        if (!product_id || !amount) {
            throw new Error("Dados de entrada não foram passados corretamente!");
        }
        const queryProduct = await index_1.default.product.findFirst({
            where: {
                id: product_id,
            },
        });
        if (queryProduct?.amount >= amount && amount > 0) {
            const newAmount = queryProduct?.amount - amount;
            const saveSale = await index_1.default.product.update({
                where: {
                    id: product_id,
                },
                data: {
                    amount: newAmount,
                },
                select: {
                    id: true,
                    name: true,
                    amount: true,
                },
            });
            return saveSale;
        }
        else {
            throw new Error("Não foi possível efetuar a venda!");
        }
    }
}
exports.SaleProductService = SaleProductService;
