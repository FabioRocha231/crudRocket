import { ICreateCategoryController } from "./../core/interface/CreateCategoryController";
import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController implements ICreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const service = new CreateCategoryService();

    const result = await service.execute({ name, description });
    console.log("debug after enter in to service.execute: ", result);

    if (result instanceof Error) return response.status(400).json(result.message);

    return response.json(result);
  }
}
