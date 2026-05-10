"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCategoryService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class DeleteCategoryService {
    async execute(category_id) {
        if (category_id) {
            const categories = await index_1.default.category.findFirst({
                where: {
                    id: category_id,
                },
            });
            if (categories) {
                const category = await index_1.default.category.delete({
                    where: {
                        id: category_id,
                    },
                });
                return category;
            }
        }
    }
}
exports.DeleteCategoryService = DeleteCategoryService;
