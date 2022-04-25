import { Request, Response } from "express";

export interface ICreateVideoController {
  handle(request: Request, response: Response): Promise<Response>;
}
