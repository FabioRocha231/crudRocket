import { Request, Response } from "express";
import { ErrorHandler } from "../core/class/errorHandler";
import { ICreateVideoController } from "../core/interface";
import { CreateVideoService } from "../services/CreateVideoService";

export class CreateVideoController implements ICreateVideoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { errorHandler } = new ErrorHandler();
    const { name, description, duration, category_id } = request.body;
    const service = new CreateVideoService();

    const [error, result] = await errorHandler(
      service.execute({ name, description, duration, category_id }),
    );

    if (result instanceof Error) return response.status(400).json(result.message);

    return response.json(result);
  }
}
