import { Request, Response } from "express";
import { ErrorHandler } from "../core/class/errorHandler";
import { IGetAllCategoriesController } from "../core/interface";

import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

export class GetAllCategoriesController implements IGetAllCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { errorHandler } = new ErrorHandler();
    const service = new GetAllCategoriesService();

    const [error, result] = await errorHandler(service.execute());

    if (error) return response.status(500).json(error.message);

    return response.status(200).json(result);
  }
}
