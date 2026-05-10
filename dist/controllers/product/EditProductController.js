"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditProductController = void 0;
const EditProductService_1 = require("../../services/product/EditProductService");
class EditProductController {
    async handle(request, response) {
        const { name, price, description, product_id, amount, category_id, } = request.body;
        const editProductService = new EditProductService_1.EditProductService();
        const productEdited = editProductService.execute({
            name,
            amount,
            description,
            price,
            product_id,
            category_id,
        });
        return response.json(productEdited);
    }
}
exports.EditProductController = EditProductController;
