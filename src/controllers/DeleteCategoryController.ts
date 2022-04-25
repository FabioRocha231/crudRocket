import { DeleteCategoryService } from "./../services/DeleteCategoryService";
import { Request, Response } from "express";
import { ErrorHandler } from "../core/class/errorHandler";
import { IDeleteCategoryController } from "../core/interface";

export class DeleteCategoryController implements IDeleteCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const service = new DeleteCategoryService();
    const { errorHandler } = new ErrorHandler();

    const [error, result] = await errorHandler(service.execute(id));

    if (result instanceof Error) return response.status(400).json(result.message);

    return response.status(204).end();
  }
}
