import { Request, Response } from "express";

export interface IGetAllCategoriesController {
  handle(request: Request, response: Response): Promise<Response>;
}
