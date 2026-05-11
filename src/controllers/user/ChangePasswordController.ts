import { Request, Response } from "express";
import { ChangePasswordService } from "../../services/user/ChangePasswordService";

class ChangePasswordController {
  async handle(request: Request, response: Response) {
    const { email, old_password, new_password } = request.body;

    const changePasswordService = new ChangePasswordService();

    const user = await changePasswordService.execute({
      email,
      old_password,
      new_password,
    });

    return response.json(user);
  }
}

export { ChangePasswordController };
