"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductController = void 0;
const DeleteProductService_1 = require("../../services/product/DeleteProductService");
class DeleteProductController {
    async handle(request, response) {
        const product_id = request.query.product_id;
        const deleteProductService = new DeleteProductService_1.DeleteProductService();
        const productDeleted = await deleteProductService.execute({ product_id });
        return response.json(productDeleted);
    }
}
exports.DeleteProductController = DeleteProductController;
