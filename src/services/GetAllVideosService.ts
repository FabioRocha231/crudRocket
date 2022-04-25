import { IGetAllVideosService } from "../core/interface";
import AppDataSource from "../db/dataSource";
import { Video } from "../entities";

export class GetAllVideosService implements IGetAllVideosService {
  public async execute(): Promise<Video[]> {
    const repo = AppDataSource.getRepository(Video);
    const videos = await repo.find({ relations: ["category"] });
    return videos;
  }
}
