import prismaClient from "../../prisma";
import { io } from "../../websocket";

interface DeleteProductRequest {
  product_id: string;
}

class DeleteProductService {
  async execute({ product_id }: DeleteProductRequest) {
    if (!product_id) {
      throw new Error("Id do produto não foi enviado!");
    }

    const deleteProduct = await prismaClient.product.delete({
      where: {
        id: product_id,
      },
    });
    
    io?.emit("product_updated");
    return deleteProduct;
  }
}

export { DeleteProductService };
