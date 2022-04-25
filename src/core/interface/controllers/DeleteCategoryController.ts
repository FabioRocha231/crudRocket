import { Request, Response } from "express";

export interface IDeleteCategoryController {
  handle(request: Request, response: Response): Promise<Response>;
}
