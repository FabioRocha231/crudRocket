import { ICreateCategoryController } from './../core/interface/CreateCategoryController';
import { ErrorHandler } from './../core/class/errorHandler';
import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";


export class CreateCategoryController extends ErrorHandler implements ICreateCategoryController  {
  async handle(request: Request, response: Response) {
    const {name, description} = request.body;
    const service = new CreateCategoryService();
    const [error, result] = await this.errorHandler(service.execute({name, description}));

    if(error) return response.status(400).json({message: error.message || error});

    return response.json(result);
  }
}