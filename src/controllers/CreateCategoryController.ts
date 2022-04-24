import { ErrorHandler } from "./../core/class/errorHandler";
import { ICreateCategoryController } from "./../core/interface/CreateCategoryController";

import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController implements ICreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const { errorHandler } = new ErrorHandler();
    const service = new CreateCategoryService();

    const [error, result] = await errorHandler(service.execute({ name, description }));
    console.log("debug after enter in to service.execute: ", error.message, result);

    if (!error) return response.status(400).json({ message: error.message });
    console.log(
      "debug after enter in to service.execute and after checking: ",
      error.message,
      result,
    );

    return response.json(result);
  }
}
