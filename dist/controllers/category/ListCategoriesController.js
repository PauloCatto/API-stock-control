"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesController = void 0;
const ListCategoriesService_1 = require("../../services/category/ListCategoriesService");
class ListCategoriesController {
    async handle(request, response) {
        const listCategoryService = new ListCategoriesService_1.ListCategoriesService();
        const categories = await listCategoryService.execute();
        return response.json(categories);
    }
}
exports.ListCategoriesController = ListCategoriesController;
