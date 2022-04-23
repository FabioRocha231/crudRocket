import { Request, Response } from "express";

export interface ICreateCategoryController {
  handle(request: Request, response: Response): Promise<Response>;
}