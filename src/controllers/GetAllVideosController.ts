import { Request, Response } from "express";
import { ErrorHandler } from "../core/class/errorHandler";
import { IGetAllVideosController } from "../core/interface";
import { GetAllVideosService } from "../services/GetAllVideosService";

export class GetAllVideosController implements IGetAllVideosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { errorHandler } = new ErrorHandler();
    const service = new GetAllVideosService();

    const [error, videos] = await errorHandler(service.execute());

    if (error) return response.status(400).send(error.message);

    return response.json(videos);
  }
}
