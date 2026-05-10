"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductsController = void 0;
const ListProductsService_1 = require("../../services/product/ListProductsService");
class ListProductsController {
    async handle(request, response) {
        const listProductsService = new ListProductsService_1.ListProductService();
        const products = await listProductsService.execute();
        return response.json(products);
    }
}
exports.ListProductsController = ListProductsController;
