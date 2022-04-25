import { ErrorHandler } from "../core/class/errorHandler";
import { ICreateVideoService } from "../core/interface";
import { VideoRequest } from "../core/interface/services/CreateVideoService";
import AppDataSource from "../db/dataSource";
import { Category, Video } from "../entities";

export class CreateVideoService implements ICreateVideoService {
  async execute({
    name,
    description,
    duration,
    category_id,
  }: VideoRequest): Promise<Video | Error> {
    const { errorHandler } = new ErrorHandler();
    const repo = AppDataSource.getRepository(Video);
    const repoCategory = AppDataSource.getRepository(Category);

    const [categoryError, categoryResult] = await errorHandler(
      repoCategory.findOne({ where: { id: category_id } }),
    );

    if (!categoryResult) return new Error("Category does not exists");

    const video = repo.create({ name, description, duration, category_id });

    await repo.save(video);

    return video;
  }
}
