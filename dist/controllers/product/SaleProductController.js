"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleProductController = void 0;
const SaleProductService_1 = require("../../services/product/SaleProductService");
class SaleProductController {
    async handle(request, response) {
        const product_id = request.query.product_id;
        const { amount } = request.body;
        const saleProductService = new SaleProductService_1.SaleProductService();
        const saleProduct = await saleProductService.execute({
            product_id,
            amount,
        });
        return response.json(saleProduct);
    }
}
exports.SaleProductController = SaleProductController;
