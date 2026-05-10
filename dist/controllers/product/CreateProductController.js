"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../../services/product/CreateProductService");
class CreateProductController {
    async handle(request, response) {
        const { name, price, description, category_id, amount, } = request.body;
        const createProductService = new CreateProductService_1.CreateProductService();
        const product = await createProductService.execute({
            name,
            price,
            description,
            category_id,
            amount,
        });
        return response.json(product);
    }
}
exports.CreateProductController = CreateProductController;
