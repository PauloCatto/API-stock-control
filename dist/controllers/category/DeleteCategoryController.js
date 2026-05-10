"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryController = void 0;
const DeleteCategoryService_1 = require("../../services/category/DeleteCategoryService");
class DeleteCategoryController {
    async handle(request, response) {
        const category_id = request.query.category_id;
        const removeCategoryService = new DeleteCategoryService_1.DeleteCategoryService();
        const category = removeCategoryService.execute(category_id);
        return response.json(category);
    }
}
exports.DeleteCategoryController = DeleteCategoryController;
