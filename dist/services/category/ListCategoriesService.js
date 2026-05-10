"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class ListCategoriesService {
    async execute() {
        const categories = await index_1.default.category.findMany({
            select: {
                id: true,
                name: true,
            },
        });
        return categories;
    }
}
exports.ListCategoriesService = ListCategoriesService;
