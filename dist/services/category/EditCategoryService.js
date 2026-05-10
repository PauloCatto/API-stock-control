"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class EditCategoryService {
    async execute({ name, category_id }) {
        if (category_id === " " || name === " " || !category_id || !name) {
            throw new Error("Invalid arguments to edit category!");
        }
        const productEdited = await prisma_1.default.category.update({
            where: {
                id: category_id,
            },
            data: {
                name: name,
            },
        });
        return productEdited;
    }
}
exports.EditCategoryService = EditCategoryService;
