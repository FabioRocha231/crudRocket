import { Request, Response } from "express";
import { ErrorHandler } from "../core/class/errorHandler";
import { IUpdateCategoryController } from "../core/interface";
import { UpdateCategoryService } from "../services/UpdateCategoryService";

export class UpdateCategoryController implements IUpdateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;
    const service = new UpdateCategoryService();
    const { errorHandler } = new ErrorHandler();

    const [error, result] = await errorHandler(service.execute({ id, name, description }));

    if (result instanceof Error) return response.status(400).json(result.message);

    return response.json(result);
  }
}
