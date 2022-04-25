import { IGetAllCategoriesService } from "../core/interface";
import AppDataSource from "../db/dataSource";
import { Category } from "../entities";

export class GetAllCategoriesService implements IGetAllCategoriesService {
  public async execute(): Promise<Category[]> {
    const repo = AppDataSource.getRepository(Category);
    const categories = await repo.find();
    return categories;
  }
}
