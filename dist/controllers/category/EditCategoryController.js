"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCategoryController = void 0;
const EditCategoryService_1 = require("../../services/category/EditCategoryService");
class EditCategoryController {
    async handle(request, response) {
        const { name } = request.body;
        const category_id = request.query.category_id;
        const editCategoryService = new EditCategoryService_1.EditCategoryService();
        const categoryEdited = editCategoryService.execute({ name, category_id });
        return response.json(categoryEdited);
    }
}
exports.EditCategoryController = EditCategoryController;
