import { ErrorHandler } from "./../core/class/errorHandler";
import { CategoryRequest, ICreateCategoryService } from "../core/interface/CreateCategoryService";
import AppDataSource from "../db/dataSource";
import { Category } from "../entities/Category";

export class CreateCategoryService implements ICreateCategoryService {
  async execute({ name, description }: CategoryRequest): Promise<Category | Error> {
    const repo = AppDataSource.getRepository(Category);
    const check = await repo.findOne({ where: { name } });
    if (check instanceof Error) return new Error("Category already exists");

    console.log(name, description);

    const category = repo.create({ name, description });
    await repo.save(category);

    return category;
  }
}
