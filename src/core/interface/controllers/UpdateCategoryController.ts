import { Request, Response } from "express";

export interface IUpdateCategoryController {
  handle(request: Request, response: Response): Promise<Response>;
}
