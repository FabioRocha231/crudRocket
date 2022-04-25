import { Request, Response } from "express";

export interface IGetAllVideosController {
  handle(request: Request, response: Response): Promise<Response>;
}
