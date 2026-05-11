import prismaClient from "../../prisma";
import { compare, hash } from "bcryptjs";
import { ChangePasswordRequest } from "../../models/interfaces/user/ChangePasswordRequest";

class ChangePasswordService {
  async execute({ email, old_password, new_password }: ChangePasswordRequest) {
    if (!email || !old_password || !new_password) {
      throw new Error("Todos os campos são obrigatórios!");
    }

    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const passwordMatch = await compare(old_password, user.password);

    if (!passwordMatch) {
      throw new Error("Senha antiga incorreta!");
    }

    const newPasswordHash = await hash(new_password, 8);

    const updatedUser = await prismaClient.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: newPasswordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return updatedUser;
  }
}

export { ChangePasswordService };
