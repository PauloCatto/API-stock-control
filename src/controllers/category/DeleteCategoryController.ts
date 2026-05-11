import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const category_id = request.query.category_id as string;
    const removeCategoryService = new DeleteCategoryService();

    try {
      const category = await removeCategoryService.execute(category_id);
      return response.json(category);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { DeleteCategoryController };
