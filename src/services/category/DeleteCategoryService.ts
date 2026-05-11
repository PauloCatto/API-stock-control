import prismaClient from "../../prisma/index";

class DeleteCategoryService {
  async execute(category_id: string) {
    if (!category_id) throw new Error("ID da categoria é obrigatório.");

    const category = await prismaClient.category.findFirst({
      where: { id: category_id },
      include: { products: true },
    });

    if (!category) throw new Error("Categoria não encontrada.");

    if (category.products.length > 0) {
      throw new Error(
        `Não é possível deletar: esta categoria possui ${category.products.length} produto(s) vinculado(s). Remova ou altere os produtos primeiro.`
      );
    }

    const deleted = await prismaClient.category.delete({
      where: { id: category_id },
    });

    return deleted;
  }
}

export { DeleteCategoryService };
